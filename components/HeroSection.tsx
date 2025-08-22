'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen px-4 md:px-8 lg:px-12 bg-white flex items-center overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-[#F7CF3C]/20 blur-xl" />
      <div className="absolute -right-32 bottom-0 w-80 h-80 rounded-full bg-[#F7CF3C]/15 blur-xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-2">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Transforming <span className="text-[#F7CF3C]">Teen Lives</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Discipline. Confidence. Growth. Join South Africa's most impactful youth programs today and unlock your potential.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <Link href="/camps" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl shadow-md hover:bg-gray-900 transition text-lg font-semibold w-full"
              >
                View Our Camps
              </motion.button>
            </Link>

            <Link href="/about" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-xl shadow-sm border border-gray-300 hover:border-[#F7CF3C]/40 transition text-lg font-medium w-full"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-8 flex items-center justify-center lg:justify-start gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600 mt-1">Teens Transformed</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">15</div>
              <div className="text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600 mt-1">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex justify-center items-center h-full"
        >
          <div className="flex items-start">
            {/* Large Left Image */}
            <motion.div
              whileHover={{ rotate: -3, scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="w-[340px] h-[480px] rounded-2xl overflow-hidden shadow-2xl rotate-[-4deg] z-10 border-4 border-white"
            >
              <Image
                src="/images/hero/img1.jpg"
                alt="Main"
                width={340}
                height={480}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Right Stacked Images */}
            <div className="ml-6 flex flex-col h-[480px] justify-between">
              <motion.div
                whileHover={{ rotate: 4, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="w-[280px] h-[230px] rounded-2xl overflow-hidden shadow-xl rotate-[3deg] border-4 border-white"
              >
                <Image
                  src="/images/hero/img2.jpg"
                  alt="Teen 1"
                  width={280}
                  height={230}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div
                whileHover={{ rotate: -3, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="w-[280px] h-[230px] rounded-2xl overflow-hidden shadow-xl rotate-[-2deg] border-4 border-white"
              >
                <Image
                  src="/images/hero/img3.jpg"
                  alt="Teen 2"
                  width={280}
                  height={230}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
