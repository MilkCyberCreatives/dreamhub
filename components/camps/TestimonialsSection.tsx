'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Lerato M.',
    role: 'Parent',
    message:
      'My son came back a completely different young man. He’s more focused, disciplined, and respectful. I highly recommend Dreamhub!',
    image: '/images/testimonials/parent1.jpg',
  },
  {
    name: 'Thabo K.',
    role: 'Camper',
    message:
      'This camp gave me the confidence I never had. I’ve made real friends and learned how to lead. Best decision of my life!',
    image: '/images/testimonials/teen1.jpg',
  },
  {
    name: 'Mrs. Mahlangu',
    role: 'Parent',
    message:
      'It’s more than just discipline. My daughter gained life skills that school doesn’t teach. We’re already signed up for the next one.',
    image: '/images/testimonials/parent2.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Parents & Teens Say
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hear real stories of transformation and growth from our previous camps.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left text-white shadow-lg hover:scale-[1.02] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                “{testimonial.message}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
