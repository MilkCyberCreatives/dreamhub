'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUsers, FaArrowRight, FaCheck, FaCalendarAlt } from 'react-icons/fa';

const camps = [
  {
    title: 'Sept/Oct School Holidays 5‑Day Camp',
    duration: '5 Days',
    price: 'R 2 500',
    description: 'Build discipline and resilience through structured routines and team activities.',
    image: '/images/camps/disciplinary.jpg',
    link: '/book/disciplinary-5-day',
    features: ['Structured daily routine', 'Team building exercises', 'Character development', 'Basic leadership skills'],
    participants: 'Max 25 participants',
    date: '30 Sept - 4 Oct 2024'
  },
  {
    title: 'Sept/Oct School Holidays 10‑Day Camp',
    duration: '10 Days',
    price: 'R 5 000',
    description: 'Extended leadership development, confidence-building, and essential life-skills training.',
    image: '/images/camps/empowerment.jpg',
    link: '/book/disciplinary-10-day',
    features: ['Advanced leadership training', 'Confidence building', 'Goal setting workshop', 'Life skills development'],
    participants: 'Max 25 participants',
    date: '30 Sept - 9 Oct 2024'
  },
];

export default function CampList() {
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
            <span className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">Upcoming Programs</span>
            <div className="w-12 h-0.5 bg-yellow-500 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Discipline Camps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Structured for growth, confidence, and leadership—every school holiday.
          </p>
        </motion.div>

        {/* Camp Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {camps.map((camp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Image with overlay */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Date badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <FaCalendarAlt className="inline mr-1" />
                  {camp.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {camp.title}
                </h3>
                
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {camp.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <FaCheck className="text-yellow-500 mr-2" />
                    Program Includes:
                  </h4>
                  <ul className="space-y-2">
                    {camp.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details and Price */}
                <div className="flex items-center justify-between mb-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaClock className="text-yellow-500 mr-1.5" />
                      <span>{camp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="text-yellow-500 mr-1.5" />
                      <span>{camp.participants}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{camp.price}</div>
                    <div className="text-xs text-gray-500">All inclusive</div>
                  </div>
                </div>

                {/* Book Button */}
                <Link href={camp.link}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-black transition-colors duration-200 group-hover:bg-yellow-500 group-hover:text-gray-900"
                  >
                    <span>Reserve Spot</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          className="text-center mt-16 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Guidance?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Not sure which camp is right for your teen? Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors">
                Get Advice
              </button>
            </Link>
            <a href="tel:0128833536">
              <button className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Call 012 883 3536
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}