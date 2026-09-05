"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, X, Eye } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function SocialFeed() {
  const [activeModalVideo, setActiveModalVideo] = useState<string | null>(null);

  const posts = [
    {
      id: "feed-1",
      type: "reel",
      title: "Cinematic Brand Shoot BTS",
      tagline: "High-octane lighting & lens setup in the studio.",
      image: "/Screenshot 2026-07-15 223720.png",
      reelUrl: "https://www.instagram.com/reel/DZbxFNKxxV-/",
      videoSrc: "/IMG_0785.MP4",
      views: "120K+ Views",
    },
    {
      id: "feed-2",
      type: "reel",
      title: "Viral Commercial Scripting",
      tagline: "Translating brand values into sub-30s hook storytelling.",
      image: "/Screenshot 2026-07-15 223727.png",
      reelUrl: "https://www.instagram.com/reel/DaKAxgXPMKu/",
      videoSrc: "/IMG_0785.MP4",
      views: "85K+ Views",
    },
    {
      id: "feed-3",
      type: "campaign",
      title: "Model & Fashion Aesthetic",
      tagline: "Natural light lifestyle direction on location.",
      image: "/IMG_3795.PNG",
      reelUrl: "https://www.instagram.com/brandexmarketing",
      views: "64K+ Views",
    },
    {
      id: "feed-4",
      type: "bts",
      title: "Product Styling Precision",
      tagline: "Framing reflections and luxury textures.",
      image: "/Screenshot 2026-07-15 223711.png",
      reelUrl: "https://www.instagram.com/brandexmarketing",
      views: "92K+ Views",
    },
  ];

  return (
    <section className="w-full py-28 md:py-40 bg-background-outer relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
                // Studio Feeds &amp; Reels
              </span>
            </div>
            <h2 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold text-white uppercase tracking-tight">
              FROM <span className="text-brand-accent">OUR FEED</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/brandexmarketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-oswald text-xs uppercase tracking-widest font-bold transition-all group"
          >
            <InstagramIcon className="w-4 h-4 text-brand-accent" />
            <span>Follow @brandexmarketing</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 4-Item Social Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-400 flex flex-col justify-between"
            >
              {/* Media Card */}
              <div className="relative aspect-[9/14] w-full overflow-hidden bg-background-center/30">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-background-outer/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-background-outer/85 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">
                    {post.type}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/80 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-brand-accent" />
                    {post.views}
                  </span>
                </div>

                {/* Center Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {post.videoSrc ? (
                    <button
                      suppressHydrationWarning
                      onClick={() => setActiveModalVideo(post.videoSrc || null)}
                      className="w-14 h-14 rounded-full bg-brand-accent text-background-outer flex items-center justify-center shadow-[0_0_30px_rgba(196,232,109,0.5)] transform scale-90 group-hover:scale-100 transition-transform"
                      aria-label={`Play ${post.title}`}
                    >
                      <Play className="w-5 h-5 fill-background-outer ml-0.5" />
                    </button>
                  ) : (
                    <a
                      href={post.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-brand-accent text-background-outer flex items-center justify-center shadow-[0_0_30px_rgba(196,232,109,0.5)] transform scale-90 group-hover:scale-100 transition-transform"
                      aria-label="View on Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Bottom External Link Trigger */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href={post.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-background-outer/85 backdrop-blur-md border border-white/15 text-white/80 hover:text-brand-accent hover:border-brand-accent transition-colors block"
                    title="Open on Instagram"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5">
                <h3 className="font-oswald text-xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors mb-1">
                  {post.title}
                </h3>
                <p className="text-xs text-white/60 font-light line-clamp-2">
                  {post.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalVideo(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              suppressHydrationWarning
              onClick={() => setActiveModalVideo(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Close Video"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black"
            >
              <video
                src={activeModalVideo}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
