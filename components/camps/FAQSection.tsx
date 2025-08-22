'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What age group is eligible to attend the camp?',
    answer: 'Our camps are designed for teens between the ages of 13 and 19. However, we can accommodate slightly older or younger participants depending on the program.',
  },
  {
    question: 'How long do the camps last?',
    answer: 'Our camps typically run for 3 to 5 days depending on the program. Special weekend camps are also available.',
  },
  {
    question: 'Are the camps safe for my child?',
    answer: 'Absolutely. Safety is our top priority. We have trained supervisors, 24/7 monitoring, and structured activities in secure locations.',
  },
  {
    question: 'What should my child bring to camp?',
    answer: 'Campers should bring comfortable clothes, toiletries, bedding (if needed), a water bottle, and any medication they require. We’ll send a full checklist after registration.',
  },
  {
    question: 'Can I communicate with my child during the camp?',
    answer: 'Yes, we have designated times when parents can check in. However, we encourage campers to fully engage in the experience with minimal distractions.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have questions? We’ve got answers. Here’s everything you need to know before sending your teen to camp.
        </motion.p>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left text-white font-medium text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 mt-3 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
