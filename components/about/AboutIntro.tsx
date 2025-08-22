'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function AboutIntro() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Section - Left side */}
        <motion.div
          className="lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-3">
            <div className="w-12 h-0.5 bg-yellow-500 mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering the Next Generation of <span className="text-yellow-500">Leaders</span>
            </h2>
          </div>
          
          <div className="space-y-5 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Dreamhub is a premier youth development initiative dedicated to transforming teenagers through structured 
              programs focused on leadership, discipline, and personal growth. We create environments where young 
              people can develop the skills and confidence needed to excel.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our evidence-based approach combines experiential learning with professional mentorship to help 
              participants unlock their potential and become responsible, capable leaders prepared for future challenges.
            </p>
          </div>

          {/* Key Points */}
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm font-medium">Professional Mentorship</span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm font-medium">Structured Programs</span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm font-medium">Proven Methodology</span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm font-medium">Safe Environment</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/camps">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 text-white px-8 py-3.5 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-200 hover:bg-black"
            >
              <span>View Our Camps</span>
              <FaArrowRight className="text-sm" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Image Section - Right side */}
        <motion.div
          className="relative w-full h-[400px] lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src="/images/about/about-intro.jpg"
            alt="Dreamhub Youth Development Program"
            fill
            className="object-cover rounded-lg"
            priority
          />
          {/* Gold decorative border */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-yellow-500 rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
}