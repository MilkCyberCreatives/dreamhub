'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function WhyDreamhubSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasStarted = useRef(false);

  const [counters, setCounters] = useState({
    teens: 0,
    camps: 0,
    years: 0,
    partners: 0,
  });

  // ✅ Start counters ONLY when section is visible
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;

          let teens = 0;
          let camps = 0;
          let years = 0;
          let partners = 0;

          const animate = () => {
            let updated = false;

            if (teens < 4500) {
              teens += 45;
              updated = true;
            }
            if (camps < 120) {
              camps += 2;
              updated = true;
            }
            if (years < 10) {
              years += 1;
              updated = true;
            }
            if (partners < 25) {
              partners += 1;
              updated = true;
            }

            setCounters({
              teens: Math.min(teens, 4500),
              camps: Math.min(camps, 120),
              years: Math.min(years, 10),
              partners: Math.min(partners, 25),
            });

            if (updated) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-white"
      aria-label="Why Choose Dreamhub Camps"
    >
      {/* Glow background accents */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#F7CF3C]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#F7CF3C]/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block text-sm font-semibold text-[#F7CF3C] uppercase tracking-wider">
                Excellence in Youth Development
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                The Dreamhub <span className="text-[#F7CF3C]">Difference</span>
              </h2>
            </div>

            <blockquote className="border-l-4 border-[#F7CF3C] pl-6 py-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dreamhub provides structured, transformative experiences that build discipline,
                confidence, and leadership capabilities in today&apos;s youth through evidence-based methodologies.
              </p>
            </blockquote>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Corporate Values:
              </h3>
              <ul className="grid gap-3">
                {[
                  'Evidence-based transformational frameworks',
                  'Certified professional mentors and coaches',
                  'Structured developmental progression',
                  'Measurable outcomes and impact assessment',
                  'Safe, inclusive, and supportive environments',
                  'Continuous program evaluation and improvement',
                ].map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#F7CF3C] flex items-center justify-center mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F7CF3C]/20 rounded-full blur-xl z-0" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#F7CF3C]/10 rounded-full blur-xl z-0" />

          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-md h-[500px] rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            <Image
              src="/images/whydreamhub/whydreamhub.jpg"
              alt="Teens participating in a Dreamhub youth development camp in South Africa"
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 33vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 bg-[#F7CF3C] text-gray-900 px-5 py-2 rounded-xl shadow-lg font-bold"
            >
              Transforming Lives Since 2013
            </motion.div>
          </motion.div>

          <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#F7CF3C]/30 rounded-xl z-0" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-[#F7CF3C]/20 rounded-xl z-0" />
        </motion.div>
      </div>
    </section>
  );
}
