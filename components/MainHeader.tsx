"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaBars,
  FaXmark,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/camps", label: "Discipline Camps" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
    { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
    { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
    { href: "https://tiktok.com", icon: FaTiktok, label: "TikTok" },
    { href: "https://x.com", icon: FaXTwitter, label: "Twitter / X" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ✅ Transparent glass header so the hero video shows through */}
      <div className="relative z-10 bg-black/35 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Dreamhub Home" className="flex items-center z-50">
            <Image
              src="/dreamhub-logo.svg"
              alt="Dreamhub Logo"
              width={220}
              height={80}
              className="w-48 md:w-56"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-white">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-white/90 transition-colors duration-200 py-2"
              >
                {label}
              </Link>
            ))}

            {/* Socials */}
            <div className="flex items-center space-x-3 pl-2 text-white/80">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/booking" aria-label="Book A Camp">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-5 py-2.5 rounded-full shadow-md hover:bg-white/90 transition-colors duration-200 text-sm font-semibold"
              >
                Book A Camp
              </motion.button>
            </Link>

            {/* Contact */}
            <div className="flex flex-col items-start space-y-1 text-left ml-4 border-l border-white/15 pl-4">
              <a
                href="tel:0128833536"
                aria-label="Call Dreamhub"
                className="text-lg font-bold text-white hover:text-white/90 transition-colors duration-200 flex items-center gap-2"
              >
                <FaPhone size={12} />
                012 883 3536
              </a>
              <a
                href="mailto:info@dreamhub.co.za"
                aria-label="Email Dreamhub"
                className="text-xs text-white/75 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <FaEnvelope size={10} />
                info@dreamhub.co.za
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/70 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-6">
                {/* Nav Links */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/90 hover:text-white font-medium py-2 border-b border-white/10"
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="tel:0128833536"
                    className="text-lg font-bold text-white hover:text-white flex items-center gap-3 py-3"
                  >
                    <FaPhone size={14} />
                    012 883 3536
                  </a>
                  <a
                    href="mailto:info@dreamhub.co.za"
                    className="text-sm text-white/80 hover:text-white flex items-center gap-3 py-2"
                  >
                    <FaEnvelope size={12} />
                    info@dreamhub.co.za
                  </a>
                </div>

                {/* Socials */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 bg-white/10 text-white rounded-full hover:bg-white/15"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-white/10">
                  <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white text-black py-3 rounded-lg shadow-md hover:bg-white/90 transition-colors duration-200 font-semibold"
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
