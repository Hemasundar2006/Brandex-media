"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ProjectCategory = "ALL" | "BRANDING" | "PRODUCTION" | "SOCIAL" | "INFLUENCER" | "DIGITAL" | "WEB";

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  client: string;
  tagline: string;
  image?: string;
  video?: string;
  featured?: boolean;
  results?: string;
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("ALL");

  const categories: ProjectCategory[] = [
    "ALL",
    "BRANDING",
    "PRODUCTION",
    "SOCIAL",
    "INFLUENCER",
    "DIGITAL",
    "WEB",
  ];

  const projects: ProjectItem[] = [
    {
      id: "proj-1",
      slug: "premium-posters",
      title: "Premium Poster Making & Visuals",
      category: "BRANDING",
      categoryLabel: "Branding & Art Direction",
      client: "BrandEx Campaign Series",
      tagline: "High-contrast graphic architecture designed to command immediate attention and elevate category authority.",
      image: "/Screenshot 2026-07-15 223705.png",
      featured: true,
      results: "+180% Engagement Growth",
    },
    {
      id: "proj-2",
      slug: "product-shoot",
      title: "Editorial Product Showcase",
      category: "PRODUCTION",
      categoryLabel: "Commercial Photography",
      client: "Luxury Consumer Brand",
      tagline: "Macro studio cinematography and precision directional lighting highlighting tactile physical luxury.",
      image: "/Screenshot 2026-07-15 223711.png",
      results: "3.2M+ Organic Reach",
    },
    {
      id: "proj-3",
      slug: "showreel-commercial",
      title: "Commercial Film Showreel",
      category: "PRODUCTION",
      categoryLabel: "Cinematic Production",
      client: "BrandEx Media Studio",
      tagline: "High-octane commercial cinematography, sound design, and narrative brand storytelling.",
      video: "/IMG_0785.MP4",
      results: "Viral Showcase",
    },
    {
      id: "proj-4",
      slug: "professional-reels",
      title: "Viral Short-Form Reels",
      category: "SOCIAL",
      categoryLabel: "Short-Form Video",
      client: "Modern D2C Brands",
      tagline: "High-retention vertical video engineered specifically for algorithm-driven organic reach.",
      image: "/Screenshot 2026-07-15 223720.png",
      results: "5M+ Video Views",
    },
    {
      id: "proj-5",
      slug: "model-shoots",
      title: "Lifestyle & Fashion Shoots",
      category: "PRODUCTION",
      categoryLabel: "Fashion & Lifestyle",
      client: "Apparel & Brand Campaign",
      tagline: "Capturing authentic identity and aspiration through bespoke art-directed fashion sets.",
      image: "/Screenshot 2026-07-15 223727.png",
      results: "42% Lead Growth",
    },
    {
      id: "proj-6",
      slug: "brand-identity-system",
      title: "Identity Design & Brand Book",
      category: "BRANDING",
      categoryLabel: "Identity System",
      client: "Fintech & Retail Venture",
      tagline: "A unified typographic and visual design system built to scale across omnichannel touchpoints.",
      image: "/IMG_1710.PNG",
      results: "Complete Rebrand",
    },
    {
      id: "proj-7",
      slug: "digital-marketing-growth",
      title: "Omnichannel Growth & Meta Ads",
      category: "DIGITAL",
      categoryLabel: "Performance Marketing",
      client: "E-Commerce Partners",
      tagline: "High-ROI advertising funnels paired with creative retargeting and real-time conversion tracking.",
      image: "/IMG_2201.JPG.jpeg",
      results: "3.8x ROAS",
    },
    {
      id: "proj-8",
      slug: "creator-influencer-management",
      title: "Shivanna 1.6M Milestone",
      category: "INFLUENCER",
      categoryLabel: "Mega Creator Campaign",
      client: "Shivanna x BrandEx Media",
      tagline: "Mass regional reach and viral celebration milestone commanding millions of active engagements.",
      image: "/influencers/shivanna-1-6m.jpeg",
      results: "1.6M+ Milestone",
    },
    {
      id: "proj-9",
      slug: "custom-web-platform",
      title: "Next.js Digital Experience",
      category: "WEB",
      categoryLabel: "Digital Systems & Web",
      client: "BrandEx Digital Experience",
      tagline: "Sub-second load times, fluid micro-interactions, and conversion-optimized visual architecture.",
      image: "/IMG_7020.PNG",
      results: "100 Performance Score",
    },
    {
      id: "proj-10",
      slug: "brandex-music-video-production",
      title: "Gaalishwasam Bandhamalle",
      category: "INFLUENCER",
      categoryLabel: "Celebrity Music Video",
      client: "BrandEx Media & Sinka Studios",
      tagline: "Cinema music video release starring Ishak Sinka, Nekkanti Divya, and Allari Apsara.",
      image: "/influencers/music-video-brandex.jpeg",
      results: "Official Studio Release",
    },
    {
      id: "proj-11",
      slug: "fashion-lifestyle-creator-network",
      title: "Urban Fashion Creator Roster",
      category: "INFLUENCER",
      categoryLabel: "Lifestyle & Grooming",
      client: "D2C Brands & Grooming",
      tagline: "High-aesthetic lookbooks and styling partnerships connecting brands with style-conscious audiences.",
      image: "/influencers/creator-fashion-male.jpeg",
      results: "High-Intent Reach",
    },
    {
      id: "proj-12",
      slug: "ethnic-cultural-influencer-campaigns",
      title: "Cultural & Festive Creators",
      category: "INFLUENCER",
      categoryLabel: "Ethnic & Heritage Campaigns",
      client: "Regional Retail & Heritage Brands",
      tagline: "Deep cultural resonance and high-converting festive storytelling across regional consumer markets.",
      image: "/influencers/creator-traditional-female.jpeg",
      results: "+240% Recall",
    },
    {
      id: "proj-13",
      slug: "grassroots-regional-creators",
      title: "Regional Grassroots Creators",
      category: "INFLUENCER",
      categoryLabel: "Grassroots Viral Reach",
      client: "Mass Consumer Brands",
      tagline: "Hyper-authentic regional comedy and community storytelling delivering massive organic visibility.",
      image: "/influencers/creator-rural-lifestyle.jpeg",
      results: "100% Organic Reach",
    },
  ];

  // Category Counts
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = cat === "ALL" ? projects.length : projects.filter((p) => p.category === cat).length;
    return acc;
  }, {} as Record<ProjectCategory, number>);

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // When "ALL" is selected, we highlight project[0] as the flagship hero card
  const flagshipProject = activeFilter === "ALL" ? filteredProjects[0] : null;
  const gridProjects = activeFilter === "ALL" ? filteredProjects.slice(1) : filteredProjects;

  return (
    <section id="selected-work" className="w-full py-28 md:py-40 bg-background-outer relative overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-brand-accent/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-brand-mid/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
                // Curated Portfolio
              </span>
            </div>
            <h2 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold text-white uppercase tracking-tight">
              SELECTED <span className="text-brand-accent">WORK</span>
            </h2>
          </div>
          <p className="text-foreground-muted text-base md:text-lg max-w-md font-light leading-relaxed">
            Real campaigns, genuine results, and bespoke digital experiences crafted for industry-defining brands.
          </p>
        </div>

        {/* --- SLEEK HORIZONTAL FILTER PILLS WITH COUNTS --- */}
        <div className="relative mb-14">
          <div className="flex items-center gap-2 pb-2 overflow-x-auto no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              const count = categoryCounts[cat];

              return (
                <button
                  suppressHydrationWarning
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-5 py-2.5 rounded-full font-oswald text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-brand-accent text-background-outer shadow-[0_0_25px_rgba(196,232,109,0.35)]"
                      : "bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-background-outer/20 text-background-outer font-black"
                        : "bg-white/10 text-white/60 font-medium"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- CINEMATIC FLAGSHIP SPOTLIGHT (Shown when ALL is active) --- */}
        {flagshipProject && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 group"
          >
            <Link href={`/portfolio/${flagshipProject.slug}`} className="block w-full">
              <div className="relative w-full rounded-[2.5rem] overflow-hidden glass-panel border border-white/15 group-hover:border-brand-accent/60 transition-all duration-500 shadow-2xl bg-black/40 min-h-[460px] md:min-h-[540px] flex flex-col justify-between p-6 sm:p-10 md:p-14">
                {/* Background Image with Cinematic Gradient */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={flagshipProject.image || "/Screenshot 2026-07-15 223705.png"}
                    alt={flagshipProject.title}
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-background-outer/60 to-background-outer/20" />
                </div>

                {/* Top Badges */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-background-outer/80 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                      FLAGSHIP CASE STUDY
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-wider text-white/90">
                      {flagshipProject.categoryLabel}
                    </span>
                  </div>

                  {flagshipProject.results && (
                    <span className="px-4 py-1.5 rounded-full bg-brand-accent/20 backdrop-blur-md border border-brand-accent/40 text-xs font-mono text-brand-accent font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                      {flagshipProject.results}
                    </span>
                  )}
                </div>

                {/* Bottom Content Bar */}
                <div className="relative z-10 mt-auto pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/60 font-medium">
                      {flagshipProject.client}
                    </span>
                    <h3 className="font-oswald text-3xl sm:text-5xl md:text-6xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors tracking-tight mt-2 leading-[1.05]">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-foreground-muted text-base md:text-lg font-light mt-3 line-clamp-2 max-w-xl leading-relaxed">
                      {flagshipProject.tagline}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-accent font-bold group-hover:translate-x-1 transition-transform">
                      <span>Explore Case Study</span>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-brand-accent text-background-outer flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:rotate-45 transition-all duration-300 shadow-[0_0_20px_rgba(196,232,109,0.4)]">
                      <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* --- BALANCED 2-COLUMN COHESIVE EDITORIAL GRID (Zero Gaps, Uniform Heights) --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {gridProjects.map((project) => {
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col justify-between"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block w-full">
                    {/* Media Container with Consistent 16:10 Framing */}
                    <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden glass-panel border border-white/10 group-hover:border-brand-accent/50 transition-all duration-500 shadow-xl bg-black/40">
                      {project.video ? (
                        <div className="relative w-full h-full">
                          <video
                            src={project.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute top-4 right-4 p-2.5 rounded-full bg-background-outer/80 backdrop-blur-md border border-white/20 text-brand-accent shadow-lg">
                            <Play className="w-3.5 h-3.5 fill-brand-accent" />
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image || "/Screenshot 2026-07-15 223705.png"}
                            alt={project.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-background-outer/30 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" />
                        </div>
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-background-outer/85 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-brand-accent font-bold">
                          {project.categoryLabel}
                        </span>
                        {project.results && (
                          <span className="px-3 py-1 rounded-full bg-brand-accent/20 backdrop-blur-md border border-brand-accent/35 text-[10px] sm:text-[11px] font-mono text-white font-bold">
                            {project.results}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Metadata Card Area */}
                    <div className="mt-5 px-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-white/50 font-medium">
                            {project.client}
                          </span>
                          <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors tracking-tight leading-snug mt-1">
                            {project.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-brand-accent group-hover:text-background-outer group-hover:rotate-45 transition-all duration-300 flex-shrink-0 mt-1">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      <p className="text-sm text-foreground-muted font-light mt-2 line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Archive CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-oswald text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:border-brand-accent/50 hover:shadow-[0_0_25px_rgba(196,232,109,0.2)] group"
          >
            <span>Explore Complete Archive & All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

