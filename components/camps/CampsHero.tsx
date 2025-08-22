'use client';

import { motion } from 'framer-motion';

export default function CampsHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{ backgroundImage: "url('/images/camps/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discipline Camps</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Structured, transformative holiday camps that build discipline, confidence, and leadership.
        </p>
      </motion.div>
    </section>
  );
}
