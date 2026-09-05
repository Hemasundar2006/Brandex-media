"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacityVideo = useTransform(scrollYProgress, [0, 0.8], [0.65, 0.1]);

  const scrollToExplore = () => {
    const nextSection = document.getElementById("intro-statement") || document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const capabilities = [
    "Commercial Video Production",
    "Brand Identity & Strategy",
    "Viral Reel Making",
    "Social Media Dominance",
    "Performance Marketing",
    "High-Conversion Websites",
    "Influencer Campaigns",
    "Model & Product Shoots",
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[92vh] md:min-h-screen flex flex-col justify-between overflow-hidden pt-12"
    >
      {/* Cinematic Background Video with Parallax & Color Grading */}
      <motion.div
        style={{ y: yVideo, opacity: opacityVideo }}
        className="absolute inset-0 z-0 origin-top pointer-events-none"
      >
        <video
          src="/From Klickpin.com- Chic air fryer dinner recipes that make everyday moments look more intentional memorable and beautifully styled for women who l.mp4#t=0,7"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 filter brightness-[0.7] contrast-[1.1] saturate-[1.1]"
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            if (video.currentTime >= 7) {
              video.currentTime = 0;
              if (video.paused) {
                video.play()?.catch(() => {
                  // Suppress browser power saving or background media pause errors
                });
              }
            }
          }}
        />
        {/* Layered Vignettes and Brand Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-outer/80 via-background-center/40 to-background-outer" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,5,0.85)_100%)]" />
      </motion.div>

      {/* Main Hero Typography & Call to Actions */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center items-center text-center mt-8 md:mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center max-w-5xl"
        >
          {/* Small Top Agency Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
            <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.22em] text-white/90 font-medium">
              BRANDEX MEDIA // CREATIVE STUDIO & DIGITAL GROWTH
            </span>
          </motion.div>

          {/* Confident Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[124px] font-bold uppercase leading-[0.92] tracking-tight text-white mb-6"
          >
            <span>WE MAKE BRANDS </span>
            <span className="block mt-1">
              <span className="text-white">IMPOSSIBLE </span>
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1.5px var(--color-brand-accent)",
                }}
              >
                TO IGNORE.
              </span>
            </span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-10 px-4"
          >
            Strategy, cinematic content, and high-performance digital experiences built to help ambitious brands dominate their market.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="#selected-work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-accent text-background-outer font-oswald text-sm md:text-base uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(196,232,109,0.5)] active:scale-95"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-oswald text-sm md:text-base uppercase tracking-widest font-bold flex items-center justify-center gap-3 backdrop-blur-md transition-all duration-300 hover:border-brand-accent/50 active:scale-95"
            >
              <span>Start a Project</span>
              <Sparkles className="w-4 h-4 text-brand-accent" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Trigger */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-6">
        <button
          suppressHydrationWarning
          onClick={scrollToExplore}
          className="group flex flex-col items-center gap-2 text-white/50 hover:text-brand-accent transition-colors cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.25em]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>

      {/* Capabilities Continuous Marquee Ticker */}
      <div className="relative z-20 w-full bg-brand-accent text-background-outer py-3.5 overflow-hidden border-y border-brand-accent/40 shadow-[0_0_30px_rgba(196,232,109,0.2)]">
        <motion.div
          className="flex whitespace-nowrap items-center gap-10 font-oswald text-sm md:text-base font-bold uppercase tracking-widest select-none"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...capabilities, ...capabilities].map((cap, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-background-outer" />
                <span>{cap}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
