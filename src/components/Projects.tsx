"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const screenshots = [
    "/IMG_6459.PNG",
    "/IMG_1710.PNG",
    "/IMG_1895.JPG.jpeg",
    "/IMG_2201.JPG.jpeg",
    "/IMG_2249.JPG.jpeg",
    "/IMG_2250.JPG.jpeg",
    "/IMG_3769.JPG.jpeg",
    "/IMG_3795.PNG",
    "/IMG_4243.HEIC",
    "/IMG_5385.PNG",
    "/IMG_6457.JPG (1).jpeg",
    "/IMG_6998.PNG",
    "/IMG_7020.PNG"
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
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity md:grayscale md:hover:grayscale-0 duration-300"
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
