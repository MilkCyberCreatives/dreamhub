"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  // ✅ YouTube Video ID
  const YOUTUBE_ID = "J9YriLGuOVM";

  // ✅ YouTube background parameters + enablejsapi (required for mute/unmute)
  const ytSrc = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${YOUTUBE_ID}&enablejsapi=1`;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const sendYTCommand = (func: "mute" | "unMute") => {
    if (!iframeRef.current?.contentWindow) return;

    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args: [],
      }),
      "*"
    );
  };

  const toggleSound = () => {
    if (isMuted) {
      sendYTCommand("unMute");
      setIsMuted(false);
    } else {
      sendYTCommand("mute");
      setIsMuted(true);
    }
  };

  // ✅ Best-possible "auto sound" (browser legal):
  // Unmute on the FIRST user interaction anywhere on the page.
  useEffect(() => {
    const enableSoundOnFirstInteraction = () => {
      // Only unmute if currently muted
      if (!isMuted) return;

      sendYTCommand("unMute");
      setIsMuted(false);

      window.removeEventListener("click", enableSoundOnFirstInteraction);
      window.removeEventListener("touchstart", enableSoundOnFirstInteraction);
      window.removeEventListener("keydown", enableSoundOnFirstInteraction);
    };

    window.addEventListener("click", enableSoundOnFirstInteraction);
    window.addEventListener("touchstart", enableSoundOnFirstInteraction);
    window.addEventListener("keydown", enableSoundOnFirstInteraction);

    return () => {
      window.removeEventListener("click", enableSoundOnFirstInteraction);
      window.removeEventListener("touchstart", enableSoundOnFirstInteraction);
      window.removeEventListener("keydown", enableSoundOnFirstInteraction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted]);

  return (
    <section
      className="
        relative w-full min-h-screen
        flex items-center overflow-hidden
        px-4 md:px-8 lg:px-12
        pt-28 md:pt-32
      "
      aria-label="Hero Section"
    >
      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full scale-110"
          src={ytSrc}
          title="Dreamhub background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-same-origin allow-scripts allow-presentation"
        />

        {/* ✅ Lighter overlay so video is more visible */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* ✅ Volume button (does NOT change layout) */}
      <button
        type="button"
        onClick={toggleSound}
        className="
          absolute bottom-6 right-6 z-20
          pointer-events-auto
          rounded-full p-3
          bg-black/50 hover:bg-black/70
          text-white shadow-lg
          backdrop-blur-md
          transition
        "
        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
      >
        {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
      </button>

      {/* Decorative glow accents */}
      <div
        className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-[#F7CF3C]/15 blur-2xl z-[1]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-0 w-80 h-80 rounded-full bg-[#F7CF3C]/10 blur-2xl z-[1]"
        aria-hidden="true"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 md:py-20">
        {/* LEFT: TEXT */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -40 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Transforming <span className="text-[#F7CF3C]">Teen Lives</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Discipline. Confidence. Growth. Join South Africa&apos;s most impactful
            youth programs today and unlock your potential.
          </p>

          <nav
            className="pt-4 flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            aria-label="Hero CTAs"
          >
            <Link href="/camps" className="w-full sm:w-auto">
              <motion.button
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-xl shadow-md hover:bg-white/90 transition text-lg font-semibold w-full"
              >
                View Our Camps
              </motion.button>
            </Link>

            <Link href="/about" className="w-full sm:w-auto">
              <motion.button
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl shadow-sm border border-white/20 hover:border-[#F7CF3C]/40 transition text-lg font-medium w-full backdrop-blur-md"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </Link>
          </nav>

          {/* STATS */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-8 flex items-center justify-center lg:justify-start gap-8"
          >
            {[
              { label: "Teens Transformed", value: "500+" },
              { label: "Years Experience", value: "15" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: IMAGES */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center h-full"
        >
          <div className="flex items-start">
            <motion.div
              whileHover={reduceMotion ? undefined : { rotate: -3, scale: 1.03 }}
              transition={{ duration: 0.35 }}
              className="w-[340px] h-[480px] rounded-2xl overflow-hidden shadow-2xl rotate-[-4deg] z-10 border-4 border-white"
            >
              <Image
                src="/images/hero/img1.jpg"
                alt="Teen participating in youth program"
                width={340}
                height={480}
                priority
                quality={75}
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 340px, 340px"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <div className="ml-6 flex flex-col h-[480px] justify-between">
              <motion.div
                whileHover={reduceMotion ? undefined : { rotate: 4, scale: 1.03 }}
                transition={{ duration: 0.35 }}
                className="w-[280px] h-[230px] rounded-2xl overflow-hidden shadow-xl rotate-[3deg] border-4 border-white"
              >
                <Image
                  src="/images/hero/img2.jpg"
                  alt="Confident teen at Dreamhub"
                  width={280}
                  height={230}
                  loading="lazy"
                  decoding="async"
                  quality={70}
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div
                whileHover={reduceMotion ? undefined : { rotate: -3, scale: 1.03 }}
                transition={{ duration: 0.35 }}
                className="w-[280px] h-[230px] rounded-2xl overflow-hidden shadow-xl rotate-[-2deg] border-4 border-white"
              >
                <Image
                  src="/images/hero/img3.jpg"
                  alt="Teen in youth empowerment workshop"
                  width={280}
                  height={230}
                  loading="lazy"
                  decoding="async"
                  quality={70}
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
