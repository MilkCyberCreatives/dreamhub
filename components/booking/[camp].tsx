'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const campsData: Record<string, { title: string; price: number; description: string }> = {
  'disciplinary-camp': {
    title: '5-Day Disciplinary Camp',
    price: 1500,
    description: 'Build discipline, responsibility, and character in 5 days.',
  },
  'empowerment-camp': {
    title: '10-Day Empowerment Camp',
    price: 3000,
    description: 'Develop leadership, confidence, and life skills in 10 days.',
  },
};

export default function BookingPage() {
  const router = useRouter();
  const { camp } = router.query;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    participants: '',
  });

  const selectedCamp = camp && typeof camp === 'string' ? campsData[camp] : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You will later replace this with the Ozow API integration step
    alert(`Redirecting to Ozow for payment of R${selectedCamp?.price}`);
  };

  if (!selectedCamp) return <div className="p-10">Invalid camp selected.</div>;

  return (
    <section className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-3xl mx-auto border border-gray-200 rounded-lg p-8 shadow-md">
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Booking: {selectedCamp.title}
        </motion.h1>

        <p className="text-gray-600 mb-6">{selectedCamp.description}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Contact Number</label>
            <input
              type="tel"
              name="contact"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of Participants</label>
            <input
              type="number"
              name="participants"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="text-lg font-semibold">Total: R{selectedCamp.price}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-300 transition"
          >
            Proceed to Pay with Ozow
          </button>
        </form>
      </div>
    </section>
  );
}
