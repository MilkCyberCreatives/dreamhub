'use client';

import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaLightbulb, FaHeart } from 'react-icons/fa';

export default function VisionMission() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-yellow-500 mr-3"></div>
            <span className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">Our Purpose</span>
            <div className="w-12 h-0.5 bg-yellow-500 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Vision</span> & <span className="text-yellow-500">Mission</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The foundation of everything we do at Dreamhub to transform young lives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Vision */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5 }}
          >
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <div className="relative z-10 bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                  <FaEye className="text-yellow-600 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                To build a generation of disciplined, confident, and purpose-driven young individuals who lead with vision,
                character, and compassion. We see Dreamhub as a beacon of hope and transformation across the country.
              </p>
              
              {/* Key Focus Areas */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-start">
                  <FaLightbulb className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Inspiring future leaders</span>
                </div>
                <div className="flex items-start">
                  <FaHeart className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Building compassionate communities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5 }}
          >
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <div className="relative z-10 bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                  <FaBullseye className="text-yellow-600 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                To deliver empowering camps and programs that nurture discipline, leadership, and life skills in teens.
                Through consistent guidance, real-life training, and positive mentorship, we shape future leaders who make
                meaningful impact.
              </p>
              
              {/* Key Focus Areas */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Structured camp programs</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Life skills development</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 bg-gray-50 rounded-xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-gray-700 mb-4">
            Ready to be part of our vision for the next generation?
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition-colors duration-200">
            Join Our Mission
          </button>
        </motion.div>
      </div>
    </section>
  );
}