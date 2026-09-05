"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ProjectCategory = "ALL" | "BRANDING" | "SOCIAL" | "PRODUCTION" | "DIGITAL" | "INFLUENCER" | "WEB";

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "BRANDING" | "SOCIAL" | "PRODUCTION" | "DIGITAL" | "INFLUENCER" | "WEB";
  categoryLabel: string;
  client: string;
  tagline: string;
  image?: string;
  video?: string;
  featured?: boolean;
  aspect?: string;
  results?: string;
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("ALL");

  const categories: ProjectCategory[] = [
    "ALL",
    "BRANDING",
    "SOCIAL",
    "PRODUCTION",
    "DIGITAL",
    "INFLUENCER",
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
      tagline: "High-contrast visual design that stops the scroll and demands immediate attention.",
      image: "/Screenshot 2026-07-15 223705.png",
      featured: true,
      results: "+180% Engagement Growth",
    },
    {
      id: "proj-2",
      slug: "product-shoot",
      title: "Editorial Product Shoot",
      category: "PRODUCTION",
      categoryLabel: "Commercial Photography",
      client: "Luxury Lifestyle Brand",
      tagline: "Showcasing physical and digital product offerings with pristine studio precision.",
      image: "/Screenshot 2026-07-15 223711.png",
      results: "3.2M+ Reach",
    },
    {
      id: "proj-3",
      slug: "showreel-commercial",
      title: "Commercial Film Showreel",
      category: "PRODUCTION",
      categoryLabel: "Cinematic Production",
      client: "BrandEx Media Studio",
      tagline: "High-octane commercial cinematography and creative editing.",
      video: "/IMG_0785.MP4",
      results: "Viral Showcase",
    },
    {
      id: "proj-4",
      slug: "professional-reels",
      title: "Viral Short-Form Reel Making",
      category: "SOCIAL",
      categoryLabel: "Short-Form Video",
      client: "Modern D2C Brands",
      tagline: "Cinematic vertical storytelling engineered specifically for algorithmic reach.",
      image: "/Screenshot 2026-07-15 223720.png",
      results: "5M+ Video Views",
    },
    {
      id: "proj-5",
      slug: "model-shoots",
      title: "Lifestyle & Model Shoots",
      category: "PRODUCTION",
      categoryLabel: "Fashion & Lifestyle",
      client: "Apparel & Brand Campaign",
      tagline: "Bringing brand identity and aesthetic lifestyle to life through authentic emotion.",
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
      tagline: "A unified typographic and visual design system across all touchpoints.",
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
      tagline: "High-ROI advertising funnels with real-time conversion attribution.",
      image: "/IMG_2201.JPG.jpeg",
      results: "3.8x ROAS",
    },
    {
      id: "proj-8",
      slug: "creator-influencer-management",
      title: "1.6 Million Shivanna // Viral Creator Campaign",
      category: "INFLUENCER",
      categoryLabel: "Mega Creator Milestone",
      client: "Shivanna x BrandEx Media",
      tagline: "Mass regional reach and viral milestone celebration commanding millions of engagements.",
      image: "/influencers/shivanna-1-6m.jpeg",
      results: "1.6M+ Milestone",
    },
    {
      id: "proj-9",
      slug: "custom-web-platform",
      title: "Modern Next.js Brand Experience",
      category: "WEB",
      categoryLabel: "Digital Systems & Web",
      client: "BrandEx Digital Experience",
      tagline: "Sub-second load times, smooth micro-interactions, and high conversion flow.",
      image: "/IMG_7020.PNG",
      results: "100 Performance Score",
    },
    {
      id: "proj-10",
      slug: "brandex-music-video-production",
      title: "Gaalishwasam Bandhamalle // Music Video Production",
      category: "INFLUENCER",
      categoryLabel: "Celebrity Music Production",
      client: "BrandEx Media & Sinka Studios",
      tagline: "Official cinema music video starring Ishak Sinka, Nekkanti Divya, Allari Apsara.",
      image: "/influencers/music-video-brandex.jpeg",
      results: "Official BrandEx Release",
    },
    {
      id: "proj-11",
      slug: "fashion-lifestyle-creator-network",
      title: "Urban Fashion & Lifestyle Creator Roster",
      category: "INFLUENCER",
      categoryLabel: "Lifestyle & Fashion",
      client: "D2C Brands & Grooming",
      tagline: "Authentic style partnerships and aesthetic modern lookbook influencer campaigns.",
      image: "/influencers/creator-fashion-male.jpeg",
      results: "High-Intent Reach",
    },
    {
      id: "proj-12",
      slug: "ethnic-cultural-influencer-campaigns",
      title: "Traditional & Ethnic Cultural Creators",
      category: "INFLUENCER",
      categoryLabel: "Ethnic & Festive Campaigns",
      client: "Regional Retail & Heritage Brands",
      tagline: "Deep cultural resonance and high-converting festive influencer storytelling.",
      image: "/influencers/creator-traditional-female.jpeg",
      results: "+240% Regional Recall",
    },
    {
      id: "proj-13",
      slug: "grassroots-regional-creators",
      title: "Regional Grassroots & Rural Viral Creators",
      category: "INFLUENCER",
      categoryLabel: "Grassroots Viral Content",
      client: "Mass Consumer Brands",
      tagline: "Hyper-authentic regional comedy and rural community storytelling with organic reach.",
      image: "/influencers/creator-rural-lifestyle.jpeg",
      results: "100% Organic Reach",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="selected-work" className="w-full py-28 md:py-40 bg-background-outer relative">
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

        {/* --- FAST SMOOTH PROJECT FILTER BUTTONS --- */}
        <div className="flex flex-wrap items-center gap-2.5 mb-14 pb-4 border-b border-white/10 no-scrollbar overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                suppressHydrationWarning
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2.5 rounded-full font-oswald text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-brand-accent text-background-outer shadow-[0_0_20px_rgba(196,232,109,0.4)]"
                    : "bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* --- EDITORIAL / ASYMMETRIC PORTFOLIO GRID --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Asymmetric sizing: index 0 is full width or 8 cols, showreel is 6 cols, etc.
              const isHeroFeatured = project.featured && activeFilter === "ALL";
              const colSpan = isHeroFeatured
                ? "md:col-span-12 lg:col-span-8"
                : index % 3 === 0
                ? "md:col-span-6 lg:col-span-6"
                : "md:col-span-6 lg:col-span-4";

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`${colSpan} group relative flex flex-col justify-between`}
                >
                  <Link href={`/portfolio/${project.slug}`} className="block w-full">
                    {/* Media Container */}
                    <div
                      className={`relative w-full rounded-3xl overflow-hidden glass-panel border border-white/10 group-hover:border-brand-accent/50 transition-all duration-500 shadow-2xl ${
                        project.video ? "aspect-[9/16] max-h-[560px] bg-black" : isHeroFeatured ? "aspect-[16/10] md:aspect-[21/10]" : "aspect-[4/5]"
                      }`}
                    >
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
                          <div className="absolute top-4 right-4 p-3 rounded-full bg-background-outer/80 backdrop-blur-md border border-white/20 text-brand-accent">
                            <Play className="w-4 h-4 fill-brand-accent" />
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image || "/IMG_6459.PNG"}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-background-outer/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                        </div>
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-5 left-5 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-background-outer/85 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-widest text-brand-accent font-bold">
                          {project.category}
                        </span>
                        {project.results && (
                          <span className="px-3 py-1 rounded-full bg-brand-accent/20 backdrop-blur-md border border-brand-accent/40 text-[11px] font-mono text-white font-bold">
                            {project.results}
                          </span>
                        )}
                      </div>

                      {/* Bottom Floating Card info on Hero */}
                      {isHeroFeatured && (
                        <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-background-outer/85 backdrop-blur-md border border-white/10 hidden md:flex items-center justify-between">
                          <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                              FEATURED CASE STUDY
                            </span>
                            <h3 className="font-oswald text-3xl font-bold uppercase text-white mt-1">
                              {project.title}
                            </h3>
                            <p className="text-sm text-white/70 font-light mt-1">
                              {project.tagline}
                            </p>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-brand-accent text-background-outer flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                            <ArrowUpRight className="w-6 h-6" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Meta info below image (for non-hero or mobile) */}
                    {(!isHeroFeatured || true) && (
                      <div className={`mt-4 ${isHeroFeatured ? "md:hidden" : ""}`}>
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors tracking-wide">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                        </div>
                        <p className="text-sm text-foreground-muted font-light mt-1.5 line-clamp-2 leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Portfolio Link */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-oswald text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:border-brand-accent/50 group"
          >
            <span>Explore Complete Archive & Case Studies</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
