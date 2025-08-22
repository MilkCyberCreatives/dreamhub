'use client';
import { motion } from 'framer-motion';
import { FaUsers, FaShieldAlt, FaBolt, FaBrain, FaHeart, FaMedal, FaStar } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt className="text-yellow-500" />,
    title: 'Safe Environment',
    desc: 'We provide a structured, secure space where teens can grow with confidence.',
  },
  {
    icon: <FaUsers className="text-yellow-500" />,
    title: 'Team Building',
    desc: 'Campers engage in activities that build collaboration, respect, and unity.',
  },
  {
    icon: <FaBolt className="text-yellow-500" />,
    title: 'Leadership Training',
    desc: 'Instilling values of responsibility, initiative, and personal growth.',
  },
  {
    icon: <FaBrain className="text-yellow-500" />,
    title: 'Mental Toughness',
    desc: 'Our programs strengthen focus, discipline, and emotional resilience.',
  },
  {
    icon: <FaHeart className="text-yellow-500" />,
    title: 'Emotional Support',
    desc: 'Teens are mentored by passionate leaders who care and understand their needs.',
  },
  {
    icon: <FaMedal className="text-yellow-500" />,
    title: 'Proven Results',
    desc: 'Families consistently report remarkable changes after attending our camps.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-yellow-500 mr-3"></div>
            <FaStar className="text-yellow-500 mx-2" />
            <div className="w-12 h-0.5 bg-yellow-500 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-yellow-500">Dreamhub</span> Camps?
          </h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our camps are built on years of success, transforming hundreds of young lives through practical life lessons, structure, and mentorship.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="group bg-gray-900 rounded-xl p-6 text-left border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 mb-5">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/15 transition-colors duration-300">
                  <div className="text-xl">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          className="text-center mt-16 bg-gray-900 rounded-2xl p-8 border border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className="text-gray-300 italic text-lg mb-4">
              "Dreamhub transformed my son's attitude and confidence. The structure and mentorship he received was exactly what he needed."
            </p>
            <div className="text-yellow-500 font-medium">- Parent of 2023 Camper</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}