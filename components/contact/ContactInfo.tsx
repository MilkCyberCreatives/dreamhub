'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaMapMarkerAlt size={24} />,
    label: 'Office',
    value: 'Pretoria, South Africa',
  },
  {
    icon: <FaEnvelope size={24} />,
    label: 'Email Us',
    value: 'info@dreamhub.co.za\nbookings@dreamhub.co.za',
  },
  {
    icon: <FaPhone size={24} />,
    label: 'Call Us',
    value: '012 883 3536',
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {contactItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="text-gold mb-3">{item.icon}</div>
            <h4 className="font-semibold text-lg mb-1">{item.label}</h4>
            <p className="text-gray-700 whitespace-pre-line">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
