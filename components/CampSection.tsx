"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function CampSection() {
  const reduceMotion = useReducedMotion();

  const camps = [
    {
      tag: "Featured",
      category: "Discipline Camp",
      price: "R2500,00",
      location: "Pretoria, South Africa",
      title: "January Back To School 5-Day Camp",
      image: "/images/camps/disciplinary.jpg",
      slug: "disciplinary-camp",
    },
    {
      tag: "Featured",
      category: "Discipline Camp",
      price: "R5000,00",
      location: "Pretoria, South Africa",
      title: "January Back To School 10-Day Camp",
      image: "/images/camps/empowerment.jpg",
      slug: "empowerment-camp",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20" aria-label="Discipline Camps">
      <div className="max-w-7xl mx-auto">
        {/* Section Header (matches attachment vibe) */}
        <div className="text-center mb-12">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Discipline Camps
          </motion.h2>

          <div className="flex justify-center mt-4">
            <span className="h-[3px] w-14 bg-gray-900/90 rounded-full" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {camps.map((camp, idx) => (
            <motion.article
              key={camp.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="
                group rounded-2xl border border-gray-200
                overflow-hidden bg-white shadow-sm
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Image Top */}
              <div className="relative w-full h-[320px]">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 560px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Featured badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md">
                    {camp.tag}
                  </span>
                </div>

                {/* Text on image (bottom-left) */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white/90 text-sm font-semibold drop-shadow">
                    {camp.category}
                  </p>
                  <p className="text-white text-2xl font-extrabold drop-shadow">
                    {camp.price}
                  </p>
                </div>
              </div>

              {/* Bottom info panel */}
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <span className="text-sm">{camp.location}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  {camp.title}
                </h3>

                {/* CTA */}
                <div className="mt-6">
                  <Link href={`/booking/${camp.slug}`} aria-label={`Register for ${camp.title}`}>
                    <motion.button
                      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                      className="
                        w-full inline-flex items-center justify-center gap-2
                        rounded-xl bg-gray-900 text-white
                        py-3.5 font-semibold
                        hover:bg-black transition
                      "
                    >
                      Register Now
                      <FaArrowRight className="text-sm" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
