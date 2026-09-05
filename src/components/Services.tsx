"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number>(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);

  const services = [
    {
      num: "01",
      slug: "content-creation",
      title: "Content Creation",
      tagline: "Visual storytelling engineered to stop the scroll and captivate attention.",
      deliverables: ["High-Impact Brand Shoots", "Viral Cinematic Reel Making", "3D & Motion Posters", "Product Styling & Visual Sets"],
      previewImage: "/Screenshot 2026-07-15 223705.png",
    },
    {
      num: "02",
      slug: "social-media-management",
      title: "Social Media",
      tagline: "Full-scale channel management and audience acquisition strategies.",
      deliverables: ["Daily Algorithmic Engagement", "Meta Ad Running & Retargeting", "Profile Grid Architecture", "Organic Community Growth"],
      previewImage: "/Screenshot 2026-07-15 223720.png",
    },
    {
      num: "03",
      slug: "branding-and-identity",
      title: "Branding & Identity",
      tagline: "Crafting iconic visual languages that elevate market authority.",
      deliverables: ["Brand Identity & Visual System", "High-Converting Brand Creatives", "Typography & Color Architecture", "Comprehensive Brand Guidelines"],
      previewImage: "/IMG_1710.PNG",
    },
    {
      num: "04",
      slug: "digital-marketing",
      title: "Digital Marketing",
      tagline: "Data-driven performance campaigns that generate measurable revenue.",
      deliverables: ["Full Meta & Google Ads Execution", "Audience Funnel Optimization", "Conversion Rate Optimization", "Transparent ROI Reporting"],
      previewImage: "/IMG_2201.JPG.jpeg",
    },
    {
      num: "05",
      slug: "influencer-marketing",
      title: "Influencer Marketing",
      tagline: "Connecting your brand with authentic creators who drive sales.",
      deliverables: ["Tiered Creator Curation", "Influencer Account Management", "Campaign Creative Direction", "Tracking & Attribution Analytics"],
      previewImage: "/IMG_5385.PNG",
    },
    {
      num: "06",
      slug: "web-development",
      title: "Web Development",
      tagline: "Next.js modern web applications built for blazing speed and conversions.",
      deliverables: ["Custom Next.js & React Architectures", "Modern 2026 Responsive Experiences", "Technical SEO Optimization", "Headless CMS Integration"],
      previewImage: "/IMG_7020.PNG",
    },
    {
      num: "07",
      slug: "video-production",
      title: "Production",
      tagline: "Full-scale studio and location cinematography with professional equipment.",
      deliverables: ["Lifestyle & Model Shoots", "Commercial Video Advertisements", "Cinematic Brand Showreels", "Professional Color Grading & Audio"],
      previewImage: "/Screenshot 2026-07-15 223727.png",
    },
  ];

  return (
    <section className="w-full py-28 md:py-40 bg-background-outer relative" id="services">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-mid/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-center/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
                // Capabilities & Expertise
              </span>
            </div>
            <h2 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold text-white uppercase tracking-tight">
              WHAT <span className="text-brand-accent">WE DO</span>
            </h2>
          </div>
          <p className="text-foreground-muted text-base md:text-lg max-w-md font-light leading-relaxed">
            Everything your brand requires to scale under one unified creative roof. We combine high-end aesthetic precision with measurable performance.
          </p>
        </div>

        {/* --- DESKTOP INTERACTIVE SERVICE ROWS --- */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Service Rows Column */}
          <div className="col-span-7 flex flex-col border-t border-white/10">
            {services.map((svc, index) => {
              const isHovered = activeHoverIndex === index;
              return (
                <div
                  key={svc.num}
                  onMouseEnter={() => setActiveHoverIndex(index)}
                  className={`group relative py-7 px-4 border-b border-white/10 transition-all duration-300 cursor-pointer ${
                    isHovered ? "bg-white/[0.04] pl-7" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-oswald text-2xl font-bold tracking-wider transition-colors duration-300 ${
                          isHovered ? "text-brand-accent" : "text-white/30"
                        }`}
                      >
                        {svc.num}
                      </span>
                      <h3
                        className={`font-oswald text-3xl xl:text-4xl font-bold uppercase tracking-wide transition-colors duration-300 ${
                          isHovered ? "text-brand-accent" : "text-white"
                        }`}
                      >
                        {svc.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/services/${svc.slug}`}
                        className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isHovered
                            ? "bg-brand-accent text-background-outer border-brand-accent shadow-[0_0_20px_rgba(196,232,109,0.4)]"
                            : "border-white/15 text-white/50 group-hover:border-white/40 group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Expanded deliverables preview under row */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-2 overflow-hidden"
                    >
                      <p className="text-sm text-white/70 font-light mb-4 max-w-xl">
                        {svc.tagline}
                      </p>
                      <div className="grid grid-cols-2 gap-2.5">
                        {svc.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Preview Column */}
          <div className="col-span-5 sticky top-36">
            <div className="glass-panel p-4 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-background-center/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHoverIndex}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={services[activeHoverIndex].previewImage}
                      alt={services[activeHoverIndex].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 50vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-background-outer/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-background-outer/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                      SERVICE {services[activeHoverIndex].num}
                    </span>
                    <Link
                      href={`/services/${services[activeHoverIndex].slug}`}
                      className="text-xs font-oswald uppercase tracking-wider text-white hover:text-brand-accent flex items-center gap-1 font-bold"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <h4 className="font-oswald text-2xl font-bold uppercase text-white mb-1">
                    {services[activeHoverIndex].title}
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-2">
                    {services[activeHoverIndex].tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE TOUCH-FRIENDLY EXPANDABLE CARDS --- */}
        <div className="lg:hidden flex flex-col gap-4">
          {services.map((svc, index) => {
            const isExpanded = mobileExpandedIndex === index;
            return (
              <div
                key={svc.num}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? "border-brand-accent/50 bg-white/[0.06]" : "border-white/10"
                }`}
              >
                <button
                  onClick={() => setMobileExpandedIndex(isExpanded ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-oswald text-xl font-bold text-brand-accent">
                      {svc.num}
                    </span>
                    <h3 className="font-oswald text-2xl font-bold uppercase text-white">
                      {svc.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-accent transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 pt-1 border-t border-white/10">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                      <Image
                        src={svc.previewImage}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-foreground-muted mb-4 font-light leading-relaxed">
                      {svc.tagline}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {svc.deliverables.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold"
                    >
                      <span>View Service Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
