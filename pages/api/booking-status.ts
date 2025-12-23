// pages/api/booking-status.ts
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Booking from "@/models/Booking";

const mongoUri = process.env.MONGODB_URI;

async function connectMongo() {
  if (!mongoUri) throw new Error("MONGODB_URI is missing");
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(mongoUri, { bufferCommands: false });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // No caching (important for payment status)
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const ref = typeof req.query.ref === "string" ? req.query.ref.trim() : "";

    if (!ref) {
      return res.status(400).json({ message: "Missing ref query param" });
    }

    await connectMongo();

    const booking = await Booking.findOne({ paymentReference: ref })
      .select("paymentStatus paymentReference transactionId amount currency campType email createdAt")
      .lean();

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    return res.status(200).json({
      paymentStatus: booking.paymentStatus || "pending",
      paymentReference: booking.paymentReference,
      transactionId: booking.transactionId || null,
      amount: booking.amount ?? null,
      currency: booking.currency || "ZAR",
      campType: booking.campType || null,
      email: booking.email || null,
      createdAt: booking.createdAt || null,
    });
  } catch (error: any) {
    console.error("booking-status error:", error?.message || error);
    return res.status(500).json({ message: "Server error" });
  }
}
