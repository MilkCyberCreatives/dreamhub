'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUsers, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

export default function CampSection() {
  const camps = [
    {
      title: '5-Day Disciplinary Camp',
      duration: '5 Days',
      participants: '25 Participants',
      description: 'A structured program focused on building discipline, responsibility, and character during school holidays.',
      image: '/images/camps/disciplinary.jpg',
      link: '/book/disciplinary-camp',
      features: ['Structured daily routine', 'Character development', 'Team building', 'Personal mentorship']
    },
    {
      title: '10-Day Empowerment Camp',
      duration: '10 Days',
      participants: '25 Participants',
      description: 'An extended program designed to develop leadership skills and personal growth through experiential learning.',
      image: '/images/camps/empowerment.jpg',
      link: '/book/empowerment-camp',
      features: ['Leadership training', 'Confidence building', 'Goal setting', 'Life skills development']
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            School <span className="text-[#F7CF3C]">Holiday Programs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Professional development camps designed to build character and leadership skills during school breaks.
          </motion.p>
        </div>

        {/* Camp Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {camps.map((camp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group"
            >
              {/* Camp Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Camp Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{camp.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{camp.description}</p>

                {/* Program Details */}
                <div className="flex gap-6 text-gray-700 text-sm mb-5">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#F7CF3C] text-sm" />
                    <span>{camp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-[#F7CF3C] text-sm" />
                    <span>{camp.participants}</span>
                  </div>
                </div>

                {/* Program Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Program Includes:</h4>
                  <ul className="space-y-2">
                    {camp.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#F7CF3C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                <Link href={camp.link}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#F7CF3C] text-gray-900 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#f8d84e] transition-colors duration-200"
                  >
                    <span>Register Now</span>
                    <FaArrowRight className="text-xs" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need More Information?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our team to learn more about our programs or to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
            <a href="tel:0128833536">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call 012 883 3536
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}