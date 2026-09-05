"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, ShieldCheck, Zap, Globe2 } from "lucide-react";
import Link from "next/link";

export default function IntroStatement() {
  const stats = [
    { number: "3+", label: "Years Experience", detail: "Strategic marketing & brand building", icon: <Award className="w-5 h-5 text-brand-accent" /> },
    { number: "50+", label: "Campaigns Delivered", detail: "Across diverse retail, lifestyle & tech sectors", icon: <Zap className="w-5 h-5 text-brand-accent" /> },
    { number: "10M+", label: "Organic Reach", detail: "Viral short-form & targeted digital impressions", icon: <ShieldCheck className="w-5 h-5 text-brand-accent" /> },
    { number: "IND | USA", label: "Global Reach", detail: "Headquartered in Visakhapatnam, serving worldwide", icon: <Globe2 className="w-5 h-5 text-brand-accent" /> },
  ];

  return (
    <section id="intro-statement" className="relative w-full py-28 md:py-40 bg-background-outer overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-mid/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-[1.5px] bg-brand-accent" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
            // BrandEx Creative Philosophy
          </span>
        </motion.div>

        {/* Big Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <h2 className="font-oswald text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold uppercase tracking-tight text-white leading-[1.02] mb-10">
            WE DON&apos;T JUST CREATE CONTENT.{" "}
            <span className="text-brand-accent block mt-1">
              WE CREATE ATTENTION.
            </span>
          </h2>
        </motion.div>

        {/* Editorial Narrative & Link */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 border-l-2 border-brand-accent pl-6 md:pl-10"
          >
            <p className="text-xl md:text-2xl text-foreground-muted font-light leading-relaxed mb-6">
              In an age of infinite digital scrolling, ordinary is invisible. At BrandEx Media, we fuse deep marketing intelligence with cinematic filmmaking and performance design to build brands that command market authority and captivate audiences.
            </p>
            <p className="text-base md:text-lg text-white/70 font-normal leading-relaxed">
              We provide ambitious founders and enterprises with a unified creative partner—from foundational brand positioning to high-converting video shoots, influencer scaling, and tailored web experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col justify-between h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-2">
                Our Promise
              </span>
              <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-3">
                Zero Generic Solutions. Pure Impact.
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Every frame shot, every campaign deployed, and every line of code written is engineered to elevate your brand prestige and drive measurable ROI.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-oswald uppercase tracking-widest text-brand-accent font-bold hover:text-white transition-colors group"
            >
              <span>Read Agency Story</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Real BrandEx Statistics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-2xl bg-white/5 border border-white/10">{stat.icon}</span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">0{i + 1}</span>
              </div>
              <div>
                <p className="font-oswald text-4xl md:text-5xl font-bold text-white tracking-tight mb-1">
                  {stat.number}
                </p>
                <p className="font-oswald text-sm uppercase tracking-wider text-brand-accent font-bold mb-1.5">
                  {stat.label}
                </p>
                <p className="text-xs text-white/60 leading-normal">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
