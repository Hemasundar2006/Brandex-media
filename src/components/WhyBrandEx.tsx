"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Layers, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function WhyBrandEx() {
  const pillars = [
    {
      num: "01",
      title: "Strategy First",
      subtitle: "Creative backed by strategic thinking.",
      desc: "We don't create visuals in a vacuum. Before a single shutter clicks or design file is rendered, we dissect your market positioning, competitor blindspots, and buyer psychology to ensure our creative work moves business metrics.",
      icon: <Compass className="w-6 h-6 text-brand-accent" />,
    },
    {
      num: "02",
      title: "Built For Attention",
      subtitle: "Content designed for today's social-first audience.",
      desc: "In an era of sub-second attention spans, standard brand content fails. We engineer cinematic hooks, vertical video dynamics, and high-contrast creative assets tailored precisely to today's algorithmic environments.",
      icon: <Eye className="w-6 h-6 text-brand-accent" />,
    },
    {
      num: "03",
      title: "One Creative Partner",
      subtitle: "Strategy → Creation → Digital → Amplification.",
      desc: "Stop coordinating between disconnected freelancers and fragmented agencies. BrandEx unites brand directors, filmmakers, performance media buyers, and developers into one cohesive execution powerhouse.",
      icon: <Layers className="w-6 h-6 text-brand-accent" />,
    },
    {
      num: "04",
      title: "Results Matter",
      subtitle: "Creative should contribute to measurable business growth.",
      desc: "Aesthetics without conversions is art; with conversions, it's agency excellence. We obsess over organic reach, follower retention, lead acquisition costs, and tangible commercial return on investment.",
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
    },
  ];

  return (
    <section className="w-full py-28 md:py-40 bg-background-outer relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-mid/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-brand-accent" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
              // The Competitive Edge
            </span>
          </div>
          <h2 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold text-white uppercase tracking-tight mb-6">
            WHY <span className="text-brand-accent">BRANDEX?</span>
          </h2>
          <p className="text-foreground-muted text-lg md:text-xl font-light leading-relaxed">
            We bridge the gap between creative visual artistry and aggressive digital commercial growth.
          </p>
        </div>

        {/* 4 Major Selling Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 hover:border-brand-accent/40 transition-all duration-400 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Ghost Numeral */}
              <div className="absolute top-6 right-6 font-oswald text-7xl md:text-8xl font-bold text-white/[0.04] group-hover:text-brand-accent/[0.08] transition-colors pointer-events-none select-none">
                {pillar.num}
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-400">
                  {pillar.icon}
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                    PILLAR {pillar.num}
                  </span>
                </div>

                <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-oswald text-base text-brand-accent/90 uppercase tracking-wider font-semibold mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-sm md:text-base text-foreground-muted font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-background-center/50 to-background-outer border border-brand-accent/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h4 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-white mb-2">
              Ready to elevate your brand to the next level?
            </h4>
            <p className="text-sm md:text-base text-white/70 font-light">
              Explore our transparent growth packages or schedule an introductory strategy call.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/pricing"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-oswald text-xs uppercase tracking-widest font-bold transition-all"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(196,232,109,0.3)]"
            >
              Start Conversation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
