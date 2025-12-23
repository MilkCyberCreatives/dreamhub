// models/Booking.ts
import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    /* =========================
       CUSTOMER DETAILS
       ========================= */
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    companyName: { type: String, trim: true },

    country: { type: String, required: true },
    address: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    province: { type: String, required: true },
    zip: { type: String, required: true },

    phone: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    notes: { type: String },

    /* =========================
       CAMP DETAILS
       ========================= */
    campType: { type: String, required: true },

    children: [
      {
        age: { type: Number, required: true },
        name: { type: String },
      },
    ],

    /* =========================
       PAYMENT DETAILS
       ========================= */
    paymentMethod: {
      type: String,
      required: true,
      enum: ["ozow", "yoco", "eft"],
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
      index: true,
    },

    paymentReference: {
      type: String,
      index: true,
    },

    transactionId: {
      type: String,
      index: true,
    },

    amount: {
      type: Number,
    },

    currency: {
      type: String,
      default: "ZAR",
    },

    /* =========================
       SYSTEM
       ========================= */
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    versionKey: false,
  }
);

/* =========================
   PERFORMANCE INDEXES
   ========================= */
BookingSchema.index({ createdAt: -1 });
BookingSchema.index({ paymentStatus: 1 });

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
