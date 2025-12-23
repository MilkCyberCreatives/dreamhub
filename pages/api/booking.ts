// pages/api/bookings.ts
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Booking from "@/models/Booking";

const mongoUri = process.env.MONGODB_URI;

async function connectMongo() {
  if (!mongoUri) throw new Error("MONGODB_URI is missing");

  // 0 = disconnected, 1 = connected
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(mongoUri, {
    // keep it stable on serverless
    bufferCommands: false,
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();

    // ✅ GET = list bookings (for admin dashboard)
    if (req.method === "GET") {
      const bookings = await Booking.find({})
        .sort({ createdAt: -1 })
        .lean();

      return res.status(200).json(bookings);
    }

    // ✅ POST = create booking (from booking form)
    if (req.method === "POST") {
      const newBooking = await Booking.create(req.body);
      return res.status(201).json({ message: "Booking saved successfully", booking: newBooking });
    }

    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Booking API error:", error);
    return res.status(500).json({ message: "Failed to process request" });
  }
}
