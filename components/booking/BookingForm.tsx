'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    camp: '5', // Default to 5-day camp
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ozow/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Payment redirect failed');

      const data = await res.json();
      window.location.href = data.paymentUrl; // Redirect to Ozow
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Book a Camp</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium">Select Camp</label>
          <select
            name="camp"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={handleChange}
            value={formData.camp}
          >
            <option value="5">5-Day Disciplinary Camp – R2500</option>
            <option value="10">10-Day Empowerment Camp – R5000</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </form>
    </div>
  );
}
