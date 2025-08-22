'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section
      className="relative h-[40vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/contact/contact-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
        <p className="mt-3 text-lg">We’d love to hear from you — have a question or ready to connect?</p>
      </motion.div>
    </section>
  );
}
