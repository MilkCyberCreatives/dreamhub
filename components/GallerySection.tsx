'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart, FaRegSmile, FaRegLaughSquint } from 'react-icons/fa';

const galleryImages = [
  '/images/gallery/g1.jpg',
  '/images/gallery/g2.jpg',
  '/images/gallery/g3.jpg',
  '/images/gallery/g4.jpg',
  '/images/gallery/g5.jpg',
  '/images/gallery/g6.jpg',
  '/images/gallery/g7.jpg',
  '/images/gallery/g8.jpg',
];

export default function GallerySection() {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex justify-center items-center mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#F7CF3C] mr-4"></div>
            <div className="flex space-x-2">
              <FaRegSmile className="text-yellow-400 text-xl" />
              <FaHeart className="text-red-400 text-xl" />
              <FaRegLaughSquint className="text-yellow-400 text-xl" />
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#F7CF3C] ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Captured <span className="text-[#F7CF3C]">Moments</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of joy, learning, and unforgettable experiences from our camps
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }} // ✅ Fixed
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 3 ? 'md:col-span-2' : ''}
              `}
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <Image
                src={src}
                alt={`Dreamhub Gallery ${index + 1}`}
                width={500}
                height={500}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-medium text-sm">Camp Memory #{index + 1}</p>
                  <div className="w-8 h-0.5 bg-[#F7CF3C] my-2 rounded-full"></div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F7CF3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F7CF3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F7CF3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F7CF3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <button className="px-8 py-3 bg-[#F7CF3C] text-gray-900 rounded-full font-semibold hover:bg-[#f5dc60] transition-colors duration-300 flex items-center mx-auto">
            View More Memories
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
