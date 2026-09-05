import type { Metadata } from "next";
import Work from "@/components/Work";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | BrandEx Media",
  description:
    "Explore BrandEx Media's complete portfolio of creative campaigns, cinema product shoots, viral social reels, and high-performance digital systems.",
};

export default function PortfolioPage() {
  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Header */}
      <section className="relative w-full py-24 md:py-36 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-mid/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              // Proven Creative Results
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6">
            OUR <span className="text-brand-accent">WORK.</span>
          </h1>

          <p className="text-foreground-muted text-lg md:text-2xl font-light max-w-3xl leading-relaxed">
            A comprehensive look into the campaigns, visual productions, and digital ecosystems we have engineered for ambitious brands. Filter by discipline or explore individual case studies.
          </p>
        </div>
      </section>

      {/* Main Filterable Work Component */}
      <Work />

      {/* Visual Stills & Moments Archive */}
      <Projects />

      {/* Conversion Banner */}
      <section className="w-full py-20 px-6 bg-background-center/20 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto glass-panel p-10 sm:p-14 rounded-[2.5rem] border border-brand-accent/30 shadow-2xl">
          <Sparkles className="w-10 h-10 text-brand-accent mx-auto mb-4" />
          <h2 className="font-oswald text-3xl sm:text-5xl font-bold uppercase text-white mb-4">
            Have a project like these in mind?
          </h2>
          <p className="text-foreground-muted text-base max-w-xl mx-auto mb-8 font-light">
            Let us craft a bespoke strategy and visual production plan to establish your brand at the pinnacle of your category.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-accent text-background-outer font-oswald text-sm uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_25px_rgba(196,232,109,0.4)]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
