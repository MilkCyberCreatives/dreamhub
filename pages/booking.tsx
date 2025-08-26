'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function BookingPage() {
  const router = useRouter();
  const [selectedCamp, setSelectedCamp] = useState('disciplinary');
  const [isLoading, setIsLoading] = useState(false);

  const campOptions = [
    {
      id: 'disciplinary',
      title: '5-Day Disciplinary Camp',
      amount: 2500,
    },
    {
      id: 'empowerment',
      title: '10-Day Empowerment Camp',
      amount: 5000,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const selected = campOptions.find(c => c.id === selectedCamp);
    if (!selected) return;

    const res = await fetch('/api/ozow/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: selected.amount,
        selectedCamp: selected.title,
      }),
    });

    const data = await res.json();
    if (data && data.redirectUrl) {
      router.push(data.redirectUrl);
    } else {
      setIsLoading(false);
      alert('Something went wrong!');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-xl w-full bg-gray-50 rounded-xl shadow-md p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Book a Camp</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {campOptions.map((camp) => (
              <label
                key={camp.id}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedCamp === camp.id ? 'border-[#F7CF3C] bg-[#FFFCEB]' : 'border-gray-300 bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="camp"
                  value={camp.id}
                  checked={selectedCamp === camp.id}
                  onChange={() => setSelectedCamp(camp.id)}
                  className="mr-4"
                />
                <div>
                  <p className="font-medium text-gray-800">{camp.title}</p>
                  <p className="text-sm text-gray-500">R{camp.amount.toLocaleString()}</p>
                </div>
              </label>
            ))}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            className="w-full bg-[#F7CF3C] hover:bg-[#f7d94b] text-gray-900 font-semibold py-3 rounded-lg shadow-md disabled:opacity-50"
          >
            {isLoading ? 'Redirecting to Ozow...' : 'Pay with Ozow'}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
