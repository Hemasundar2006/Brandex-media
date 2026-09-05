"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Search, Compass, Film, Share2, Rocket } from "lucide-react";

export default function Steps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const steps = [
    {
      phase: "01",
      title: "Discover",
      subtitle: "Understand & Audit",
      desc: "Comprehensive immersion into your brand DNA, target market psychology, competitor analysis, and growth obstacles.",
      icon: <Search className="w-5 h-5 text-brand-accent" />,
    },
    {
      phase: "02",
      title: "Strategize",
      subtitle: "Creative Roadmap",
      desc: "Formulating the narrative angle, visual style guidelines, content distribution calendar, and performance targets.",
      icon: <Compass className="w-5 h-5 text-brand-accent" />,
    },
    {
      phase: "03",
      title: "Create",
      subtitle: "Studio Production",
      desc: "Deploying high-end cameras, lighting, and art direction to produce cinematic commercials, viral reels, and custom web assets.",
      icon: <Film className="w-5 h-5 text-brand-accent" />,
    },
    {
      phase: "04",
      title: "Amplify",
      subtitle: "Targeted Distribution",
      desc: "Distributing your creative assets through precision Meta advertising, influencer partnerships, and organic social algorithms.",
      icon: <Share2 className="w-5 h-5 text-brand-accent" />,
    },
    {
      phase: "05",
      title: "Grow",
      subtitle: "Measure & Scale",
      desc: "Continuous conversion tracking, data analysis, and iterative scaling to compound reach, brand loyalty, and revenue.",
      icon: <Rocket className="w-5 h-5 text-brand-accent" />,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full py-28 md:py-40 bg-background-center/30 relative overflow-hidden border-t border-white/5"
      id="process"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center md:text-left mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <span className="w-8 h-[1.5px] bg-brand-accent" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
              // Execution Methodology
            </span>
          </div>
          <h2 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold text-white uppercase tracking-tight mb-4">
            YOUR BRAND <span className="text-brand-accent">JOURNEY</span>
          </h2>
          <p className="text-foreground-muted text-base md:text-xl max-w-2xl font-light leading-relaxed">
            A battle-tested 5-stage framework that transforms ambitious concepts into market-dominating brands.
          </p>
        </div>

        {/* --- DESKTOP HORIZONTAL TIMELINE --- */}
        <div className="hidden lg:block relative pt-12 pb-16">
          {/* Base Inactive Track */}
          <div className="absolute top-[88px] left-8 right-8 h-[2px] bg-white/10" />

          {/* Animated Brand Progress Track */}
          <motion.div
            className="absolute top-[88px] left-8 right-8 h-[2px] bg-brand-accent origin-left shadow-[0_0_15px_rgba(196,232,109,0.7)]"
            style={{ scaleX: scrollYProgress }}
          />

          {/* 5 Step Nodes */}
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col items-center text-center px-2 group"
              >
                {/* Node Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-background-outer border-2 border-white/20 flex items-center justify-center mb-6 group-hover:border-brand-accent group-hover:shadow-[0_0_25px_rgba(196,232,109,0.5)] transition-all duration-400 bg-background-outer relative z-20">
                  {step.icon}
                </div>

                {/* Step Marker */}
                <span className="font-mono text-xs text-brand-accent font-bold tracking-widest uppercase mb-1">
                  PHASE {step.phase}
                </span>

                <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-1 group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3 font-semibold">
                  {step.subtitle}
                </p>

                <p className="text-xs text-foreground-muted leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- MOBILE VERTICAL TIMELINE --- */}
        <div className="lg:hidden relative pl-6 pb-8">
          {/* Vertical Inactive Base Track */}
          <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-white/10" />

          {/* Vertical Animated Track */}
          <motion.div
            className="absolute top-4 bottom-4 left-6 w-[2px] bg-brand-accent origin-top shadow-[0_0_15px_rgba(196,232,109,0.6)]"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 flex flex-col"
              >
                {/* Vertical Node Icon */}
                <div className="absolute -left-[17px] top-0 w-9 h-9 rounded-xl bg-background-outer border-2 border-brand-accent flex items-center justify-center shadow-[0_0_15px_rgba(196,232,109,0.4)] z-10">
                  {step.icon}
                </div>

                <span className="font-mono text-xs text-brand-accent font-bold tracking-widest uppercase mb-0.5">
                  PHASE {step.phase}
                </span>

                <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-0.5">
                  {step.title}
                </h3>

                <p className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2 font-medium">
                  {step.subtitle}
                </p>

                <p className="text-sm text-foreground-muted leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
