'use client';

import { motion } from 'framer-motion';

export default function VisionPurpose() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-yellow-500">Vision & Purpose</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            className="bg-white/70 backdrop-blur-md rounded-xl border border-gray-200 shadow-md p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To shape a generation of confident, responsible, and resilient young individuals by offering transformative
              experiences that ignite leadership, instill discipline, and build lifelong values.
            </p>
          </motion.div>

          {/* Purpose */}
          <motion.div
            className="bg-white/70 backdrop-blur-md rounded-xl border border-gray-200 shadow-md p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Purpose</h3>
            <p className="text-gray-700 leading-relaxed">
              Dreamhub exists to create safe and empowering environments where teenagers can disconnect from distractions,
              discover their true potential, and build the mental, emotional, and social skills needed for adulthood.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
