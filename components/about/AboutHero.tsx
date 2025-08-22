'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section
      className="relative h-[60vh] w-full flex items-center justify-center text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about/about-hero.jpg')" }} // Make sure this image exists
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dreamhub</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We empower youth through discipline, leadership, and transformative experiences.
        </p>
      </motion.div>
    </section>
  );
}
