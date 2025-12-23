// ✅ FILE: /pages/api/ozow/notify.ts
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import mongoose from "mongoose";
import Booking from "@/models/Booking";

const mongoUri = process.env.MONGODB_URI;

async function connectMongo() {
  if (!mongoUri) throw new Error("MONGODB_URI is missing");
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(mongoUri, { bufferCommands: false });
}

/**
 * Try to normalize common Ozow notify fields.
 * Ozow implementations can send slightly different keys depending on the method used.
 */
function pickField(body: any, keys: string[]) {
  for (const k of keys) {
    if (body?.[k] !== undefined && body?.[k] !== null && body?.[k] !== "") return body[k];
  }
  return undefined;
}

function normalizeAmount(value: any) {
  const n = Number(value);
  if (Number.isNaN(n)) return undefined;
  return n.toFixed(2);
}

function normalizeStatus(value: any) {
  const raw = String(value ?? "").toLowerCase().trim();

  // Common "success" values seen in gateways
  const successSet = new Set([
    "success",
    "successful",
    "complete",
    "completed",
    "paid",
    "true",
    "1",
    "ok",
    "approved",
  ]);

  const failSet = new Set([
    "failed",
    "fail",
    "declined",
    "cancelled",
    "canceled",
    "false",
    "0",
    "error",
    "rejected",
  ]);

  if (successSet.has(raw)) return "paid";
  if (failSet.has(raw)) return "failed";

  // If unknown, keep pending
  return "pending";
}

/**
 * Optional hash validation (STRICT mode).
 * Without the official Ozow integration manual for your exact notify payload,
 * we can only safely validate using a common/typical pattern.
 *
 * Turn on strict mode only after confirming the exact hash field order from Ozow docs.
 */
function verifyHashIfStrict(body: any) {
  const strict = process.env.OZOW_STRICT_NOTIFY_HASH === "true";
  if (!strict) return { ok: true, reason: "strict-hash-disabled" };

  const siteCode = process.env.OZOW_SITE_CODE;
  const privateKey = process.env.OZOW_PRIVATE_KEY;
  if (!siteCode || !privateKey) {
    return { ok: false, reason: "missing-env-sitecode-or-privatekey" };
  }

  const transactionReference = pickField(body, [
    "transactionReference",
    "TransactionReference",
    "merchant_payment_code",
    "MerchantPaymentCode",
    "reference",
    "Reference",
  ]);

  const amount = normalizeAmount(
    pickField(body, ["amount", "Amount", "amountPaid", "AmountPaid", "amount_total", "AmountTotal"])
  );

  const status = pickField(body, ["status", "Status", "transactionStatus", "TransactionStatus", "result", "Result"]);

  const receivedHash =
    pickField(body, ["hashCheck", "HashCheck", "hash", "Hash"])?.toString()?.toLowerCase() || "";

  if (!transactionReference || !amount || !status || !receivedHash) {
    return { ok: false, reason: "missing-fields-for-hash-verify" };
  }

  // ✅ Common pattern used by many Ozow examples: siteCode + transactionReference + amount + status + privateKey
  // If your Ozow manual shows a different order, we will update this instantly.
  const stringToHash = `${siteCode}${transactionReference}${amount}${String(status)}${privateKey}`;
  const computed = crypto.createHash("sha512").update(stringToHash).digest("hex").toLowerCase();

  if (computed !== receivedHash) {
    return { ok: false, reason: "hash-mismatch" };
  }

  return { ok: true, reason: "hash-verified" };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ozow usually calls notify with POST, but allow GET for quick testing.
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const body = req.method === "GET" ? req.query : req.body;

    // ✅ Optional strict hash verification
    const hashCheck = verifyHashIfStrict(body);
    if (!hashCheck.ok) {
      console.error("Ozow notify rejected:", hashCheck.reason, body);
      // Return 200 to avoid repeated gateway retries if you prefer,
      // but for strict mode it's safer to show failure.
      return res.status(400).send("Invalid notify hash");
    }

    const transactionReference = pickField(body, [
      "transactionReference",
      "TransactionReference",
      "merchant_payment_code",
      "MerchantPaymentCode",
      "reference",
      "Reference",
    ]);

    const transactionId = pickField(body, ["transactionId", "TransactionId", "paymentId", "PaymentId", "bankReference"]);

    const statusRaw = pickField(body, [
      "status",
      "Status",
      "transactionStatus",
      "TransactionStatus",
      "result",
      "Result",
      "isSuccess",
      "IsSuccess",
    ]);

    const paymentStatus = normalizeStatus(statusRaw);

    if (!transactionReference) {
      console.error("Ozow notify missing transactionReference:", body);
      return res.status(400).send("Missing transactionReference");
    }

    await connectMongo();

    // Find booking by paymentReference (set during /ozow/checkout)
    const booking = await Booking.findOne({ paymentReference: transactionReference });

    if (!booking) {
      console.error("Ozow notify: booking not found for reference:", transactionReference);
      // Respond 200 so Ozow doesn't keep retrying forever
      return res.status(200).send("OK");
    }

    // ✅ Idempotency: if already paid, do nothing
    if (booking.paymentStatus === "paid") {
      return res.status(200).send("OK");
    }

    // Update booking status
    booking.paymentStatus = paymentStatus;
    if (transactionId) booking.transactionId = String(transactionId);

    // If your schema includes amount/currency, keep them consistent
    const amountStr = normalizeAmount(
      pickField(body, ["amount", "Amount", "amountPaid", "AmountPaid", "amount_total", "AmountTotal"])
    );
    if (amountStr && typeof booking.amount === "number") {
      // Only update if amount already exists
      booking.amount = Number(amountStr);
    }

    await booking.save();

    return res.status(200).send("OK");
  } catch (err: any) {
    console.error("Ozow notify error:", err?.message || err);
    // Return 200 to prevent repeated retries (common webhook best practice),
    // while you still see logs in Vercel.
    return res.status(200).send("OK");
  }
}
