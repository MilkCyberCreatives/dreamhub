'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCampground, FaUsers, FaHandsHelping, FaCalendarAlt } from 'react-icons/fa';

const stats = [
  { 
    label: 'Camps Hosted', 
    target: 48,
    icon: <FaCampground className="text-yellow-500 text-xl" />
  },
  { 
    label: 'Teens Impacted', 
    target: 1200,
    icon: <FaUsers className="text-yellow-500 text-xl" />
  },
  { 
    label: 'Volunteers', 
    target: 85,
    icon: <FaHandsHelping className="text-yellow-500 text-xl" />
  },
  { 
    label: 'Years of Service', 
    target: 6,
    icon: <FaCalendarAlt className="text-yellow-500 text-xl" />
  },
];

function Counter({ target, label, icon }: { target: number; label: string; icon: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = target / (duration / 20); // Calculate increment based on duration
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 20);

          return () => clearInterval(timer);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    const element = document.getElementById(`counter-${label}`);
    
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target, label, hasAnimated]);

  return (
    <div id={`counter-${label}`} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
      <div className="flex justify-center mb-3">
        <div className="p-3 bg-yellow-100 rounded-full">
          {icon}
        </div>
      </div>
      <motion.span 
        className="text-4xl md:text-5xl font-bold text-gray-900 block mb-2"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {count}+
      </motion.span>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export default function OurImpact() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <div className="w-12 h-0.5 bg-yellow-500 mr-3"></div>
            <span className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">Our Achievements</span>
            <div className="w-12 h-0.5 bg-yellow-500 ml-3"></div>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our <span className="text-yellow-500">Impact</span> in Numbers
          </motion.h2>

          <motion.p
            className="text-gray-700 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Through consistent holiday camps and life-changing programs, Dreamhub has empowered hundreds of teens across
            South Africa to lead disciplined, purpose-driven lives.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5 }}
            >
              <Counter 
                target={stat.target} 
                label={stat.label} 
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional context */}
        <motion.div
          className="text-center mt-16 bg-gray-50 rounded-xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-gray-700 italic">
            "Each number represents a life transformed, a story changed, and a future reshaped through our programs."
          </p>
        </motion.div>
      </div>
    </section>
  );
}