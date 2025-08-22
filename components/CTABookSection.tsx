'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaStar, FaRegCalendarCheck } from 'react-icons/fa';

export default function CTABookSection() {
  return (
    <section className="relative w-full py-12 px-6 md:px-12 bg-white overflow-hidden">
      {/* Main CTA Container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-6 md:p-10 text-center shadow-none"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-14 h-14 bg-[#FDF6F6] rounded-xl mb-4"
          >
            <FaRegCalendarCheck className="text-gray-700 text-xl" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Ready to <span className="text-gray-700">Transform</span> Your Teen?
          </h2>

          <p className="text-gray-600 text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Give them the gift of discipline, leadership, and confidence at our next Dreamhub camp. Limited spots available.
          </p>

          <Link href="#book-now">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F3C623] hover:bg-yellow-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center mx-auto space-x-2"
            >
              <span>Book A Camp Now</span>
              <FaArrowRight className="text-sm" />
            </motion.button>
          </Link>

          <p className="text-gray-500 text-sm mt-4 flex items-center justify-center">
            <FaStar className="text-yellow-400 mr-2" />
            Trusted by hundreds of parents
          </p>
        </motion.div>
      </div>

      {/* Floating accents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-6 left-6 w-5 h-5 bg-[#FDF6F6] rounded-lg opacity-60"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-6 right-6 w-6 h-6 bg-[#FDF6F6] rounded-lg opacity-60"
      ></motion.div>
    </section>
  );
}
