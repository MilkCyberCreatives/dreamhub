'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  // SAME video used in hero
  const YOUTUBE_ID = 'J9YriLGuOVM';

  const videoSrc = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${YOUTUBE_ID}`;

  return (
    <section className="w-full bg-white pt-20 pb-16 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          The <span className="text-[#F7CF3C]">Dreamhub</span> Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how our transformative programs create meaningful impact and lasting change
        </p>
      </motion.div>

      {/* Autoplay Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="relative w-full h-[450px] overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full scale-110"
            src={videoSrc}
            title="Dreamhub Transformative Experience"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-same-origin allow-scripts allow-presentation"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </motion.div>

      {/* Info Blocks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12 max-w-5xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Structured Programs',
              text: 'Evidence-based curriculum designed for maximum impact',
            },
            {
              title: 'Expert Mentors',
              text: 'Certified professionals guiding every step of the journey',
            },
            {
              title: 'Measurable Results',
              text: 'Trackable progress and documented transformational outcomes',
            },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="w-12 h-12 bg-[#F7CF3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#F7CF3C]">{idx + 1}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button className="bg-[#F7CF3C] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#f8d84e] transition-colors">
          Book Your Camp Now
        </button>
      </motion.div>
    </section>
  );
}
