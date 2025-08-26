'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

export default function WhyDreamhubSection() {
  const [counters, setCounters] = useState({
    teens: 0,
    camps: 0,
    years: 0,
    partners: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        teens: prev.teens < 4500 ? prev.teens + 45 : 4500,
        camps: prev.camps < 120 ? prev.camps + 2 : 120,
        years: prev.years < 10 ? prev.years + 1 : 10,
        partners: prev.partners < 25 ? prev.partners + 1 : 25,
      }));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-white">
      {/* Light glow pattern overlays */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#F7CF3C]/10 rounded-full blur-3xl animate-pulse-medium z-0" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE - Corporate Content */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header Section */}
            <div className="space-y-4">
              <div className="inline-block text-sm font-semibold text-[#F7CF3C] uppercase tracking-wider mb-2">
                Excellence in Youth Development
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                The Dreamhub <span className="text-[#F7CF3C]">Difference</span>
              </h2>
            </div>

            {/* Corporate Statement */}
            <div className="border-l-4 border-[#F7CF3C] pl-6 py-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dreamhub provides structured, transformative experiences that build discipline, 
                confidence, and leadership capabilities in today's youth through evidence-based methodologies.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Corporate Values:</h3>
              <div className="grid gap-3">
                {[
                  "Evidence-based transformational frameworks",
                  "Certified professional mentors and coaches",
                  "Structured developmental progression",
                  "Measurable outcomes and impact assessment",
                  "Safe, inclusive, and supportive environments",
                  "Continuous program evaluation and improvement"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F7CF3C] flex items-center justify-center mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700 text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Single Hero Image (Unchanged) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-full"
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F7CF3C]/20 rounded-full blur-xl z-0"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#F7CF3C]/10 rounded-full blur-xl z-0"></div>
          
          {/* Main Hero Image */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-md h-[500px] rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            <Image
              src="/images/whydreamhub/whydreamhub.jpg"
              alt="Dreamhub Camp Experience"
              fill
              className="object-cover"
              priority
            />
            
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-6 left-6 bg-[#F7CF3C] text-gray-900 px-5 py-2 rounded-xl shadow-lg font-bold z-20"
            >
              Transforming Lives Since 2013
            </motion.div>
          </motion.div>
          
          {/* Decorative elements around the image */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#F7CF3C]/30 rounded-xl z-0"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-[#F7CF3C]/20 rounded-xl z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}
