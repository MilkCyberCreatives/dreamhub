// ✅ FILE: /pages/booking.tsx
"use client";

import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";

type CampType = "" | "5-Day Disciplinary Camp" | "10-Day Empowerment Camp";

export default function BookingPage() {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    campType: CampType;
    amount: number;
  }>({
    name: "",
    email: "",
    campType: "",
    amount: 0,
  });

  const [loading, setLoading] = useState(false);

  const amountForCamp = useMemo(() => {
    if (form.campType === "5-Day Disciplinary Camp") return 2500;
    if (form.campType === "10-Day Empowerment Camp") return 5000;
    return 0;
  }, [form.campType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = { ...prev, [name]: value } as any;

      // Update amount when camp changes
      if (name === "campType") {
        const camp = value as CampType;
        next.amount =
          camp === "5-Day Disciplinary Camp"
            ? 2500
            : camp === "10-Day Empowerment Camp"
            ? 5000
            : 0;
      }

      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.campType || !amountForCamp) {
      alert("Please complete all fields.");
      return;
    }

    try {
      setLoading(true);

      // ✅ 1) Create booking FIRST (so admin + status tracking works)
      // Your Booking model requires many fields; we'll supply safe placeholders for now.
      // Later we will expand the form to collect full billing + child details.
      const nameParts = form.name.trim().split(" ");
      const firstName = nameParts[0] || form.name.trim();
      const lastName = nameParts.slice(1).join(" ") || "N/A";

      const bookingPayload = {
        firstName,
        lastName,
        companyName: "",
        country: "South Africa",
        address: "N/A",
        address2: "",
        city: "N/A",
        province: "N/A",
        zip: "0000",
        phone: "N/A",
        email: form.email.trim(),
        notes: "",
        campType: form.campType,
        children: [{ age: 0, name: "" }], // placeholder
        paymentMethod: "ozow",
        paymentStatus: "pending",
        amount: amountForCamp,
        currency: "ZAR",
      };

      const bookingRes = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });

      if (!bookingRes.ok) {
        const err = await bookingRes.json().catch(() => null);
        console.error("Booking save failed:", err);
        alert("Could not save booking. Please try again.");
        return;
      }

      const bookingData = await bookingRes.json().catch(() => null);
      const bookingId = bookingData?.booking?._id;

      // ✅ 2) Initialize Ozow payment and link it to bookingId
      const payRes = await fetch("/api/ozow/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          campType: form.campType,
          amount: amountForCamp,
          bookingId, // ✅ important for paid-status tracking
        }),
      });

      const payData = await payRes.json().catch(() => null);

      if (payData?.redirectUrl) {
        window.location.href = payData.redirectUrl;
        return;
      }

      console.error("Ozow init failed:", payData);
      alert("Payment failed to initialize. Please try again.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Book a Camp | Dreamhub</title>
        <meta
          name="description"
          content="Secure your spot at Dreamhub's disciplinary and empowerment camps. Book and pay online easily."
        />
      </Head>

      <section className="min-h-screen bg-white px-6 py-16 md:px-12">
        <div className="max-w-3xl mx-auto border p-8 shadow-xl rounded-lg">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/bookingozow-pty-ltd-seeklogo.svg"
              alt="Ozow Logo"
              width={150}
              height={60}
              priority
              sizes="(max-width: 768px) 120px, 150px"
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Book Your Camp
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                onChange={handleChange}
                placeholder="e.g. Thabo Mokoena"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                onChange={handleChange}
                placeholder="e.g. thabo@email.com"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Select Camp</label>
              <select
                name="campType"
                value={form.campType}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                onChange={handleChange}
              >
                <option value="">-- Choose Camp --</option>
                <option value="5-Day Disciplinary Camp">
                  5-Day Disciplinary Camp - R2500
                </option>
                <option value="10-Day Empowerment Camp">
                  10-Day Empowerment Camp - R5000
                </option>
              </select>
            </div>

            {amountForCamp > 0 && (
              <div className="text-lg font-semibold text-center">
                Total: <span className="text-green-600">R{amountForCamp}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || amountForCamp === 0}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By proceeding, you agree to be redirected to our secure payment provider.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
