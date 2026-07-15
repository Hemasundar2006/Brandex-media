"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const screenshots = [
    "/Screenshot 2026-07-09 010314.png",
    "/Screenshot 2026-07-09 010405.png",
    "/Screenshot 2026-07-09 010411.png",
    "/Screenshot 2026-07-09 010419.png",
    "/Screenshot 2026-07-09 010425.png",
    "/Screenshot 2026-07-09 010441.png",
    "/Screenshot 2026-07-09 010448.png",
    "/Screenshot 2026-07-09 010528.png",
    "/Screenshot 2026-07-09 010539.png",
    "/Screenshot 2026-07-09 010556.png",
    "/Screenshot 2026-07-09 010703.png",
    "/Screenshot 2026-07-09 010711.png",
    "/Screenshot 2026-07-09 010722.png",
    "/Screenshot 2026-07-09 010731.png",
    "/Screenshot 2026-07-09 010737.png",
    "/Screenshot 2026-07-09 010744.png",
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedScreenshots = [...screenshots, ...screenshots];

  return (
    <section className="w-full py-24 bg-background-outer relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-brand-accent">Projects</span>
        </h2>
        <p className="text-foreground-muted mt-4 text-lg">
          A glimpse into the brands and platforms we've transformed.
        </p>
      </div>

      {/* The Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">

        {/* Left fade gradient */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background-outer to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedScreenshots.map((src, idx) => (
            <div
              key={idx}
              className="relative w-[280px] h-[160px] md:w-[320px] md:h-[180px] flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-accent/50 transition-colors group-hover:[animation-play-state:paused]"
            >
              <img
                src={src}
                alt={`Project ${idx}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Right fade gradient */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background-outer to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
