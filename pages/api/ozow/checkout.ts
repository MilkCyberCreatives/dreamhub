// ✅ FILE: /pages/api/ozow/checkout.ts
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import mongoose from "mongoose";
import Booking from "@/models/Booking";

const mongoUri = process.env.MONGODB_URI;

// Simple Mongo connect (fast + safe for Vercel)
async function connectMongo() {
  if (!mongoUri) throw new Error("MONGODB_URI is missing");
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(mongoUri, { bufferCommands: false });
}

function toAmountString(amount: number) {
  // Always 2 decimals (Ozow expects this)
  return Number(amount).toFixed(2);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // ✅ Required env vars
    const siteCode = process.env.OZOW_SITE_CODE;
    const privateKey = process.env.OZOW_PRIVATE_KEY;
    const successUrl = process.env.OZOW_SUCCESS_URL;
    const cancelUrl = process.env.OZOW_CANCEL_URL;
    const notifyUrl = process.env.OZOW_NOTIFY_URL;

    if (!siteCode || !privateKey || !successUrl || !cancelUrl || !notifyUrl) {
      return res.status(500).json({
        error: "Missing Ozow environment variables",
        missing: {
          OZOW_SITE_CODE: !siteCode,
          OZOW_PRIVATE_KEY: !privateKey,
          OZOW_SUCCESS_URL: !successUrl,
          OZOW_CANCEL_URL: !cancelUrl,
          OZOW_NOTIFY_URL: !notifyUrl,
        },
      });
    }

    // ✅ Input validation
    const { name, email, campType, amount, bookingId } = req.body as {
      name?: string;
      email?: string;
      campType?: string;
      amount?: number;
      bookingId?: string; // optional: if you create booking first, pass it here
    };

    if (!name || !email || !campType || typeof amount !== "number") {
      return res.status(400).json({
        error: "Missing or invalid fields",
        expected: { name: "string", email: "string", campType: "string", amount: "number" },
      });
    }

    if (amount <= 0) {
      return res.status(400).json({ error: "Amount must be greater than 0" });
    }

    // ✅ Make transaction reference stable + unique
    const transactionReference = `DREAMHUB-${Date.now()}`;

    // ✅ Optional: attach payment reference to an existing booking, OR create a minimal pending booking
    // Best practice: create booking first, then call ozow/checkout with bookingId
    await connectMongo();

    if (bookingId) {
      await Booking.findByIdAndUpdate(
        bookingId,
        {
          paymentMethod: "ozow",
          paymentStatus: "pending",
          paymentReference: transactionReference,
          amount,
          currency: "ZAR",
        },
        { new: true }
      );
    } else {
      // fallback: create a minimal record (you can remove this if your flow always creates bookings first)
      await Booking.create({
        firstName: name.split(" ")[0] || name,
        lastName: name.split(" ").slice(1).join(" ") || "N/A",
        country: "South Africa",
        address: "N/A",
        city: "N/A",
        province: "N/A",
        zip: "0000",
        phone: "N/A",
        email,
        notes: "Auto-created by Ozow checkout (no bookingId provided).",
        campType,
        children: [{ age: 0 }],
        paymentMethod: "ozow",
        paymentStatus: "pending",
        paymentReference: transactionReference,
        amount,
        currency: "ZAR",
      });
    }

    const amountString = toAmountString(amount);

    // ✅ Hash (keep the exact ordering you already used)
    const stringToHash =
      `${siteCode}` +
      `${transactionReference}` +
      `${amountString}` +
      `${email}` +
      `${successUrl}` +
      `${cancelUrl}` +
      `${notifyUrl}` +
      `ZAR` +
      `false` +
      `${privateKey}`;

    const hash = crypto.createHash("sha512").update(stringToHash).digest("hex");

    // ✅ Form payload
    const formData = new URLSearchParams();
    formData.append("siteCode", siteCode);
    formData.append("countryCode", "ZA");
    formData.append("currencyCode", "ZAR");
    formData.append("amount", amountString);
    formData.append("transactionReference", transactionReference);
    formData.append("bankReference", campType);
    formData.append("customerFirstName", name);
    formData.append("customerEmail", email);
    formData.append("successUrl", successUrl);
    formData.append("cancelUrl", cancelUrl);
    formData.append("notifyUrl", notifyUrl);
    formData.append("isTest", "false"); // set "true" only when testing
    formData.append("hashCheck", hash);

    // ✅ Use fetch instead of axios (less dependency weight)
    const ozowRes = await fetch("https://api.ozow.com/PostPaymentRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await ozowRes.json().catch(() => null);

    if (!ozowRes.ok) {
      return res.status(500).json({
        error: "Ozow payment initialization failed",
        status: ozowRes.status,
        data,
      });
    }

    const redirectUrl = data?.url || data?.paymentUrl || data?.redirectUrl;
    if (!redirectUrl) {
      return res.status(500).json({
        error: "Ozow did not return a redirect URL",
        data,
      });
    }

    return res.status(200).json({
      redirectUrl,
      transactionReference,
    });
  } catch (error: any) {
    console.error("Ozow checkout error:", error?.message || error);
    return res.status(500).json({
      error: "Payment initialization failed",
      details: error?.message || "Unknown error",
    });
  }
}
