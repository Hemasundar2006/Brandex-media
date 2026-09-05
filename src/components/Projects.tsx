"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Sparkles, Eye } from "lucide-react";

interface ArchiveItem {
  src: string;
  title: string;
  category: string;
  type: "logo" | "photo";
  aspect: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"ALL" | "LOGOS" | "STILLS">("ALL");
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  const archiveItems: ArchiveItem[] = [
    // Client Brand Logos & Identity Systems
    {
      src: "/IMG_6459.PNG",
      title: "BrandEx Media Signature",
      category: "Brand Identity",
      type: "logo",
      aspect: "aspect-[16/10]",
    },
    {
      src: "/IMG_5385.PNG",
      title: "Yoshika Studio",
      category: "3D Metallic Logo",
      type: "logo",
      aspect: "aspect-[16/9]",
    },
    {
      src: "/IMG_6998.PNG",
      title: "RV Interiors",
      category: "Luxury Emblem",
      type: "logo",
      aspect: "aspect-square",
    },
    {
      src: "/IMG_1710.PNG",
      title: "Marlin Cay Pub & Bar",
      category: "Hospitality Badge",
      type: "logo",
      aspect: "aspect-[16/10]",
    },
    {
      src: "/IMG_7020.PNG",
      title: "Barrel House Vibe & Wine",
      category: "F&B Brand Identity",
      type: "logo",
      aspect: "aspect-[16/10]",
    },
    {
      src: "/IMG_3795.PNG",
      title: "Charter Stays",
      category: "Service Apartments Logo",
      type: "logo",
      aspect: "aspect-[16/10]",
    },
    {
      src: "/IMG_6870.PNG",
      title: "BrandEx Media Monogram",
      category: "Monochrome Mark",
      type: "logo",
      aspect: "aspect-[16/9]",
    },

    // Campaign Stills & Visual Moments
    {
      src: "/IMG_1895.JPG.jpeg",
      title: "Directional Studio Lighting",
      category: "Cinema Lighting",
      type: "photo",
      aspect: "aspect-square",
    },
    {
      src: "/IMG_2201.JPG.jpeg",
      title: "Luxury Beverage Styling",
      category: "Commercial Shoot",
      type: "photo",
      aspect: "aspect-[16/9]",
    },
    {
      src: "/IMG_2249.JPG.jpeg",
      title: "Architectural Set Composition",
      category: "Studio Production",
      type: "photo",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/IMG_2250.JPG.jpeg",
      title: "Commercial Product Frame",
      category: "Editorial Still",
      type: "photo",
      aspect: "aspect-square",
    },
    {
      src: "/IMG_3769.JPG.jpeg",
      title: "Lifestyle Emotion & Glow",
      category: "Model Cinematography",
      type: "photo",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/IMG_6457.JPG (1).jpeg",
      title: "Editorial Wardrobe Still",
      category: "Fashion Production",
      type: "photo",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/Screenshot 2026-07-15 223705.png",
      title: "High-Contrast Poster Architecture",
      category: "Poster Artwork",
      type: "photo",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/Screenshot 2026-07-15 223711.png",
      title: "Tactile Luxury Showcase",
      category: "Product Detail",
      type: "photo",
      aspect: "aspect-[16/10]",
    },
    {
      src: "/Screenshot 2026-07-15 223727.png",
      title: "Aspirational Lifestyle Frame",
      category: "Commercial Still",
      type: "photo",
      aspect: "aspect-[4/5]",
    },
  ];

  const filteredItems = archiveItems.filter((item) => {
    if (activeTab === "LOGOS") return item.type === "logo";
    if (activeTab === "STILLS") return item.type === "photo";
    return true;
  });

  return (
    <section className="w-full py-20 sm:py-32 bg-background-outer relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
                // Visual Design & Identity Archive
              </span>
            </div>
            <h2 className="font-oswald text-4xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-tight mb-2">
              Our <span className="text-brand-accent">Archive</span>
            </h2>
            <p className="text-foreground-muted text-sm sm:text-base md:text-lg max-w-xl font-light">
              A curated collection of client brand marks, logos, cinema frames, and visual campaign stills engineered by BrandEx.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab("ALL")}
              className={`px-4 sm:px-5 py-2 rounded-full font-oswald text-xs uppercase tracking-wider font-bold transition-all ${activeTab === "ALL"
                ? "bg-brand-accent text-background-outer shadow-md"
                : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              suppressHydrationWarning
            >
              All Assets ({archiveItems.length})
            </button>
            <button
              onClick={() => setActiveTab("LOGOS")}
              className={`px-4 sm:px-5 py-2 rounded-full font-oswald text-xs uppercase tracking-wider font-bold transition-all ${activeTab === "LOGOS"
                ? "bg-brand-accent text-background-outer shadow-md"
                : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              suppressHydrationWarning
            >
              Brand Logos ({archiveItems.filter((i) => i.type === "logo").length})
            </button>
            <button
              onClick={() => setActiveTab("STILLS")}
              className={`px-4 sm:px-5 py-2 rounded-full font-oswald text-xs uppercase tracking-wider font-bold transition-all ${activeTab === "STILLS"
                ? "bg-brand-accent text-background-outer shadow-md"
                : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              suppressHydrationWarning
            >
              Campaign Stills ({archiveItems.filter((i) => i.type === "photo").length})
            </button>
          </div>
        </div>

        {/* Responsive Masonry Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 md:gap-6 space-y-3 sm:space-y-4 md:space-y-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={`${item.src}-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (idx % 4) * 0.08, duration: 0.5 }}
              className={`relative bg-white/[0.04] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group break-inside-avoid shadow-lg hover:border-brand-accent/50 hover:shadow-[0_8px_30px_rgba(196,232,109,0.15)] transition-all ${item.aspect}`}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Rendering: Logos use object-contain with generous responsive padding, Photos use object-cover */}
              {item.type === "logo" ? (
                <div className="w-full h-full p-4 sm:p-6 md:p-8 flex items-center justify-center bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-md"
                    loading="lazy"
                  />
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Category Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 pointer-events-none">
                <span
                  className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono uppercase tracking-wider font-bold backdrop-blur-md border ${item.type === "logo"
                    ? "bg-brand-accent/20 text-brand-accent border-brand-accent/40 shadow-sm"
                    : "bg-background-outer/80 text-white/80 border-white/15"
                    }`}
                >
                  {item.category}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-4 bg-gradient-to-t from-background-outer via-background-outer/85 to-transparent flex items-end justify-between opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-oswald text-[11px] sm:text-xs md:text-sm font-bold uppercase text-white tracking-wide truncate max-w-[85%]">
                  {item.title}
                </p>
                <Eye className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all z-10"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center p-4"
            >
              <div
                className={`relative w-full flex items-center justify-center rounded-3xl overflow-hidden border border-white/15 shadow-2xl ${selectedItem.type === "logo"
                  ? "bg-white/[0.05] p-8 sm:p-14 max-h-[65vh]"
                  : "bg-black max-h-[75vh]"
                  }`}
              >
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-xl"
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                  {selectedItem.category}
                </span>
                <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
