'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative z-10 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/dreamhub-logo.svg"
              alt="Dreamhub Logo"
              width={220}
              height={80}
              className="w-48 md:w-56"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-gray-800">
            <Link href="/" className="hover:text-black transition-colors duration-200 py-2">Home</Link>
            <Link href="/about" className="hover:text-black transition-colors duration-200 py-2">About</Link>
            <Link href="/camps" className="hover:text-black transition-colors duration-200 py-2">Discipline Camps</Link>
            <Link href="/contact" className="hover:text-black transition-colors duration-200 py-2">Contact Us</Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pl-2 text-gray-600">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black transition-colors duration-200 rounded-full hover:bg-gray-100">
                <FaFacebookF size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black transition-colors duration-200 rounded-full hover:bg-gray-100">
                <FaInstagram size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black transition-colors duration-200 rounded-full hover:bg-gray-100">
                <FaLinkedinIn size={14} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black transition-colors duration-200 rounded-full hover:bg-gray-100">
                <FaTiktok size={14} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black transition-colors duration-200 rounded-full hover:bg-gray-100">
                <FaXTwitter size={14} />
              </a>
            </div>

            {/* CTA Button */}
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-5 py-2.5 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-200 text-sm font-semibold"
              >
                Book A Camp
              </motion.button>
            </Link>

            {/* Contact Info */}
            <div className="flex flex-col items-start space-y-1 text-left ml-4 border-l border-gray-200 pl-4">
              <a
                href="tel:0128833536"
                className="text-lg font-bold text-gray-900 hover:text-black transition-colors duration-200 flex items-center gap-2"
              >
                <FaPhone size={12} />
                012 883 3536
              </a>
              <a
                href="mailto:info@dreamhub.co.za"
                className="text-xs text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2"
              >
                <FaEnvelope size={10} />
                info@dreamhub.co.za
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-4 py-6 space-y-6">
                {/* Mobile Nav Links */}
                <div className="flex flex-col space-y-4">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-black font-medium py-2 border-b border-gray-100">Home</Link>
                  <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-black font-medium py-2 border-b border-gray-100">About</Link>
                  <Link href="/camps" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-black font-medium py-2 border-b border-gray-100">Discipline Camps</Link>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-black font-medium py-2 border-b border-gray-100">Contact Us</Link>
                </div>

                {/* Mobile Contact */}
                <div className="pt-4 border-t border-gray-200">
                  <a href="tel:0128833536" className="text-lg font-bold text-gray-900 hover:text-black flex items-center gap-3 py-3">
                    <FaPhone size={14} />
                    012 883 3536
                  </a>
                  <a href="mailto:info@dreamhub.co.za" className="text-sm text-gray-600 hover:text-black flex items-center gap-3 py-2">
                    <FaEnvelope size={12} />
                    info@dreamhub.co.za
                  </a>
                </div>

                {/* Mobile Socials */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                    <FaFacebookF size={16} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                    <FaInstagram size={16} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                    <FaLinkedinIn size={16} />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                    <FaTiktok size={16} />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                    <FaXTwitter size={16} />
                  </a>
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <Link href="/book" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-black text-white py-3 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 font-semibold"
                    >
                      Book A Camp
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
