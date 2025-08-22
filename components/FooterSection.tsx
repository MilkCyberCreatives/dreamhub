'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="relative bg-black text-white px-6 md:px-12 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + Description + Contact */}
          <div>
            <div className="mb-6">
              <div className="relative w-40 h-12 mb-4">
                <Image
                  src="/dreamhub-logo.svg"
                  alt="Dreamhub Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming teens through discipline, leadership, and confidence-building programs.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <FaPhone className="text-white mt-1 mr-3 text-sm" />
                <span className="text-gray-400 text-sm">012 883 3536</span>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-white mt-1 mr-3 text-sm" />
                <span className="text-gray-400 text-sm">info@dreamhub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/camps" className="text-gray-400 hover:text-white transition text-sm">
                  Our Camps
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* More Info Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">More Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/stories" className="text-gray-400 hover:text-white transition text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for camp updates and parenting tips.
            </p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-3 text-sm rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-black px-4 py-3 rounded-r-lg hover:bg-gray-200 transition">
                <FaPaperPlane />
              </button>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition"
              >
                <FaFacebookF className="text-white text-lg" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition"
              >
                <FaInstagram className="text-white text-lg" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition"
              >
                <FaYoutube className="text-white text-lg" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dreamhub. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed by{' '}
            <a
              href="https://www.milkcybercreatives.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Milk Cyber Creatives
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
