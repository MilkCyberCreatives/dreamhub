'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Send Us a Message
        </motion.h2>

        {submitted ? (
          <p className="text-green-600 mt-8">Thanks for reaching out! We'll be in touch soon.</p>
        ) : (
          <form className="mt-8 space-y-6 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                name="name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-gold focus:border-gold"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-gold focus:border-gold"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-gold focus:border-gold"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
