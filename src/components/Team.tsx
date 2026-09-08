"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Team() {
  const founders = [
    {
      name: "Pradeep Lenka",
      role: "Founder & Director",
      specialty: "Brand Strategy & Growth Systems",
      bio: "Fusing deep strategic marketing expertise with visual production to engineer high-performance brand ecosystems. Pradeep directs client brand architecture, positioning narratives, and multi-channel marketing campaigns across domestic and international markets.",
      image: "/Screenshot 2026-07-09 011106.png",
      linkedin: "https://www.linkedin.com/company/brandex-media",
      instagram: "https://www.instagram.com/brand_exmedia/",
    },
    {
      name: "Mahesh Arjilli",
      role: "Founder & Director",
      specialty: "Cinematography & Creative Direction",
      bio: "Cinematic filmmaker translating complex concepts into memorable, authentic visual narratives. Mahesh oversees studio and on-location production, leading camera choreography, high-fashion model shoots, lighting design, and post-production color grading.",
      image: "/Screenshot 2026-07-09 011158.png",
      linkedin: "https://www.linkedin.com/company/brandex-media",
      instagram: "https://www.instagram.com/brand_exmedia/",
    },
  ];

  return (
    <section className="w-full py-28 md:py-40 bg-background-outer relative overflow-hidden" id="team">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-center/25 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
                // Executive Leadership
              </span>
            </div>
            <h2 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold text-white uppercase tracking-tight">
              THE PEOPLE <span className="text-brand-accent">BEHIND BRANDEX</span>
            </h2>
          </div>
          <p className="text-foreground-muted text-base md:text-lg max-w-md font-light leading-relaxed">
            The visionary directors uniting marketing intelligence and cinematic filmmaking to elevate modern brands.
          </p>
        </div>

        {/* Large Editorial Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="glass-panel p-6 sm:p-10 rounded-[2.5rem] border border-white/10 hover:border-brand-accent/40 transition-all duration-500 group flex flex-col sm:flex-row gap-8 items-center sm:items-start"
            >
              {/* Large Editorial Portrait */}
              <div className="relative w-56 h-64 sm:w-52 sm:h-72 lg:w-60 lg:h-80 rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl bg-white/5 border border-white/10">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-brand-accent/15 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-transparent to-transparent opacity-60" />
              </div>

              {/* Founder Information */}
              <div className="flex flex-col justify-between h-full text-center sm:text-left flex-1">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold mb-3">
                    {founder.role}
                  </div>
                  <h3 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-xs text-white/50 uppercase tracking-wider font-medium mb-4">
                    {founder.specialty}
                  </p>
                  <p className="text-sm text-foreground-muted font-light leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-4 border-t border-white/10">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 hover:bg-brand-accent hover:text-background-outer text-white/70 border border-white/10 transition-colors"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 hover:bg-brand-accent hover:text-background-outer text-white/70 border border-white/10 transition-colors"
                    aria-label={`${founder.name} Instagram`}
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/919010205771"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-xs font-oswald uppercase tracking-widest text-brand-accent font-bold hover:text-white transition-colors"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
