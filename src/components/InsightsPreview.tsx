"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InsightsPreview() {
  const articles = [
    {
      slug: "high-end-visuals-roi-2026",
      category: "Branding",
      title: "Why High-End Visuals Are the Highest ROI Investment in 2026",
      summary:
        "In an automated world of average content, human-directed cinematic quality signals instant brand prestige, commanding higher customer lifetime value.",
      image: "/Screenshot 2026-07-15 223705.png",
      date: "Sep 2026",
      readTime: "5 min read",
    },
    {
      slug: "short-form-video-mastery",
      category: "Social Media",
      title: "Short-Form Video Mastery: Building Retention in Under 30 Seconds",
      summary:
        "How modern brands leverage vertical hook architecture, audio cues, and seamless pacing to dominate social algorithms and turn scrollers into buyers.",
      image: "/Screenshot 2026-07-15 223720.png",
      date: "Aug 2026",
      readTime: "4 min read",
    },
    {
      slug: "single-creative-partner-advantage",
      category: "Marketing",
      title: "The Single Creative Partner Advantage: Why Fragmented Agencies Fail",
      summary:
        "Why unifying strategy, video production, web architecture, and digital advertising under one roof eliminates handoff friction and multiplies results.",
      image: "/IMG_2201.JPG.jpeg",
      date: "Aug 2026",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="w-full py-28 md:py-40 bg-background-outer relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
                // Thought Leadership
              </span>
            </div>
            <h2 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold text-white uppercase tracking-tight">
              INSIGHTS &amp; <span className="text-brand-accent">PERSPECTIVES</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-oswald text-xs uppercase tracking-widest font-bold transition-all group"
          >
            <span>Browse All Insights</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3 Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <motion.article
              key={art.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-400 group flex flex-col justify-between"
            >
              <Link href={`/insights/${art.slug}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-background-center/30">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background-outer/85 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">
                      {art.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs text-white/50 font-mono mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-accent" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-oswald text-2xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors leading-tight mb-3">
                    {art.title}
                  </h3>

                  <p className="text-sm text-foreground-muted font-light leading-relaxed line-clamp-3 mb-6">
                    {art.summary}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-oswald uppercase tracking-widest text-brand-accent font-bold group-hover:text-white transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
