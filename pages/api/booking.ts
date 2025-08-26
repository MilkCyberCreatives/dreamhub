// pages/api/bookings.ts

import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Booking from '@/models/Booking';

const mongoUri = process.env.MONGODB_URI;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    if (!mongoUri) {
      throw new Error('MongoDB connection URI is missing');
    }

    // Connect to MongoDB
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongoUri);
    }

    const newBooking = new Booking(req.body);
    await newBooking.save();

    return res.status(200).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ message: 'Failed to save booking' });
  }
}
