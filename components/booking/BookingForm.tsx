'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BookingForm() {
  const router = useRouter();
  const [camp, setCamp] = useState('5-Day Disciplinary Camp');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    const amount = camp === '5-Day Disciplinary Camp' ? 2500 : 5000;

    try {
      const res = await fetch('/api/ozow/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ campName: camp, amount }),
      });

      const data = await res.json();
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert('Something went wrong. Please try again.');
        setProcessing(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setProcessing(false);
    }
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book Your Camp
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Select Camp</label>
            <select
              className="w-full border px-4 py-2 rounded"
              value={camp}
              onChange={(e) => setCamp(e.target.value)}
            >
              <option value="5-Day Disciplinary Camp">5-Day Disciplinary Camp (R2500)</option>
              <option value="10-Day Empowerment Camp">10-Day Empowerment Camp (R5000)</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <motion.button
            type="submit"
            disabled={processing}
            className="w-full py-3 bg-[#F7CF3C] text-black font-semibold rounded hover:bg-[#f5da62] transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {processing ? 'Processing...' : 'Proceed to Payment'}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
