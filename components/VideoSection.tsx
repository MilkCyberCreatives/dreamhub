'use client';

import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

export default function VideoSection() {
  return (
    <section className="w-full bg-white pt-20 pb-16 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          The <span className="text-[#F7CF3C]">Dreamhub</span> Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how our transformative programs create meaningful impact and lasting change
        </p>
      </motion.div>

      {/* Full Width Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <div className="relative w-full" style={{ height: '450px' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Dreamhub Transformative Experience"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Text Below Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-12 max-w-5xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="w-12 h-12 bg-[#F7CF3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-[#F7CF3C]">1</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Structured Programs</h4>
            <p className="text-sm text-gray-600">
              Evidence-based curriculum designed for maximum impact
            </p>
          </div>

          <div>
            <div className="w-12 h-12 bg-[#F7CF3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-[#F7CF3C]">2</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Mentors</h4>
            <p className="text-sm text-gray-600">
              Certified professionals guiding every step of the journey
            </p>
          </div>

          <div>
            <div className="w-12 h-12 bg-[#F7CF3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-[#F7CF3C]">3</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Measurable Results</h4>
            <p className="text-sm text-gray-600">
              Trackable progress and documented transformational outcomes
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16"
      >
        <button className="bg-[#F7CF3C] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#f8d84e] transition-colors">
          Book Your Camp Now
        </button>
      </motion.div>
    </section>
  );
}
