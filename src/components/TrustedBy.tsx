"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedBy() {
  const brandLogos = [
    { src: "/Screenshot 2026-07-09 010405.png", name: "Client Partner 1" },
    { src: "/Screenshot 2026-07-09 010419.png", name: "Client Partner 2" },
    { src: "/Screenshot 2026-07-09 010425.png", name: "Client Partner 3" },
    { src: "/Screenshot 2026-07-09 010441.png", name: "Client Partner 4" },
    { src: "/Screenshot 2026-07-09 010448.png", name: "Client Partner 5" },
    { src: "/Screenshot 2026-07-09 010528.png", name: "Client Partner 6" },
    { src: "/Screenshot 2026-07-09 010539.png", name: "Client Partner 7" },
    { src: "/Screenshot 2026-07-09 010556.png", name: "Client Partner 8" },
    { src: "/Screenshot 2026-07-09 010711.png", name: "Client Partner 9" },
    { src: "/Screenshot 2026-07-09 010722.png", name: "Client Partner 10" },
  ];

  return (
    <section className="w-full py-20 bg-background-outer border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50 font-semibold">
          TRUSTED BY AMBITIOUS BRANDS &amp; INDUSTRY LEADERS
        </span>
      </div>

      {/* Infinite Smooth Scrolling Monochrome Logos */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Masks */}
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-background-outer to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-background-outer to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-14 md:gap-20 whitespace-nowrap select-none"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <div
              key={index}
              className="relative w-28 h-14 md:w-36 md:h-16 flex-shrink-0 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-400 ease-out cursor-pointer flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
