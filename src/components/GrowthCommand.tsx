"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Check, Radio, Sparkles, Target } from "lucide-react";
import Link from "next/link";

const signals = [
  { label: "Reach", value: "3.2M+", change: "+72%" },
  { label: "Engagement", value: "8.4%", change: "+38%" },
  { label: "Qualified leads", value: "482", change: "+64%" },
];

const pillars = [
  { icon: Target, title: "Strategy", text: "A sharp market position and a growth plan tied to real business goals." },
  { icon: Sparkles, title: "Creative", text: "Scroll-stopping films, visuals and stories produced by one in-house team." },
  { icon: BarChart3, title: "Performance", text: "Campaigns continuously tested, measured and scaled around what converts." },
];

export default function GrowthCommand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-[#07120b] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
          <div>
            <span className="eyebrow-chip"><Radio className="h-3.5 w-3.5" /> One connected growth engine</span>
            <h2 className="mt-7 max-w-4xl font-display text-4xl font-bold uppercase leading-[.96] tracking-[-.045em] text-white sm:text-6xl lg:text-8xl">
              Not another agency.
              <span className="block text-brand-accent">Your growth department.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/60 lg:pb-2 lg:text-lg">
            Stop coordinating five different vendors. BrandEx brings strategy, content, paid media, creators and web under one accountable team.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[.82fr_1.18fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-5 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/40">Live growth snapshot</p>
                <p className="mt-1 font-display text-xl font-semibold text-white">Campaign command</p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-brand-accent"><span className="status-dot" /> Live</span>
            </div>
            <div className="mt-5 space-y-3">
              {signals.map((signal, index) => (
                <motion.div key={signal.label} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="grid grid-cols-[1fr_auto] items-center rounded-2xl border border-white/8 bg-black/15 p-4">
                  <div><p className="text-xs text-white/45">{signal.label}</p><p className="mt-1 font-display text-2xl font-bold text-white">{signal.value}</p></div>
                  <span className="rounded-full bg-brand-accent px-3 py-1.5 text-xs font-bold text-background-outer">{signal.change}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/45"><Check className="h-4 w-4 text-brand-accent" /> Transparent reports. No vanity-metric theatre.</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article key={pillar.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * .1, duration: .6 }} className="group flex min-h-[270px] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[.035] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand-accent/45 hover:bg-brand-accent/[.06] sm:min-h-[360px]">
                  <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-accent/20 bg-brand-accent/10 text-brand-accent"><Icon className="h-5 w-5" /></span><span className="font-mono text-xs text-white/30">0{index + 1}</span></div>
                  <div><h3 className="font-display text-2xl font-bold uppercase text-white sm:text-3xl">{pillar.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{pillar.text}</p></div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-brand-accent/25 bg-brand-accent p-6 text-background-outer sm:flex-row sm:items-center sm:p-8">
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] opacity-60">Ready when you are</p><p className="mt-1 font-display text-2xl font-bold sm:text-3xl">Let’s build the brand people choose first.</p></div>
          <Link href="/contact" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-background-outer px-6 py-3 text-xs font-bold uppercase tracking-[.15em] text-white transition-transform hover:scale-[1.03]">Book a strategy call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>
      </div>
    </section>
  );
}
