"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect: video moves down slower than the page scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("spotlight");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.2, // Wait for preloader
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 origin-top bg-background-outer">
        <video 
          src="/From Klickpin.com- Chic air fryer dinner recipes that make everyday moments look more intentional memorable and beautifully styled for women who l.mp4#t=0,7"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 7) {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play();
            }
          }}
        />
        {/* Dark overlay gradient to blend the image into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-outer/70 via-background-center/50 to-background-outer/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mt-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          Unlock Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-accent">Potential Creativity</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-foreground-muted font-light max-w-2xl"
        >
          We know how to make your brand different.
        </motion.p>


      </motion.div>

      {/* Scroll CTA */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2 focus:outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-sm uppercase tracking-widest font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
