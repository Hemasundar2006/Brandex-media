import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Perspectives | BrandEx Media",
  description:
    "Expert perspectives on brand strategy, commercial video production, viral social growth, and high-performance digital marketing in 2026.",
};

export default function InsightsPage() {
  const articles = [
    {
      slug: "high-end-visuals-roi-2026",
      category: "Branding",
      title: "Why High-End Visuals Are the Highest ROI Investment in 2026",
      summary:
        "In an automated world of commoditized content, human-directed cinematic quality signals instant brand prestige, commanding higher customer lifetime value.",
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
    {
      slug: "crafting-unforgettable-brand-identity",
      category: "Creative",
      title: "Crafting an Unforgettable Brand Identity in Saturated Markets",
      summary:
        "The psychological principles behind distinctive visual assets, color memorability, and how to construct a brand book that scales across global media.",
      image: "/IMG_1710.PNG",
      date: "Jul 2026",
      readTime: "5 min read",
    },
    {
      slug: "performance-creative-for-meta-ads",
      category: "Digital",
      title: "Performance Creative: The New Variable in Meta Advertising",
      summary:
        "Why media-buying hacks are dead and how creative velocity—testing diverse video hooks and high-contrast visuals—drives 90% of paid ad scale.",
      image: "/Screenshot 2026-07-15 223711.png",
      date: "Jul 2026",
      readTime: "4 min read",
    },
    {
      slug: "nextjs-for-high-converting-agencies",
      category: "Content",
      title: "Modern Web Architectures: Why Speed Is Your Biggest Conversion Driver",
      summary:
        "How sub-second load times and fluid micro-interactions reduce bounce rates by 40% and build immediate buyer trust.",
      image: "/IMG_7020.PNG",
      date: "Jun 2026",
      readTime: "5 min read",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Hero Header */}
      <section className="relative w-full py-24 md:py-36 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-mid/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              // Creative &amp; Marketing Intelligence
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6">
            INSIGHTS &amp; <span className="text-brand-accent">ARTICLES.</span>
          </h1>

          <p className="text-foreground-muted text-lg md:text-2xl font-light max-w-3xl leading-relaxed">
            Actionable strategies, tactical breakdowns, and agency perspectives on commercial filmmaking, branding architecture, and organic digital growth.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-400 group flex flex-col justify-between"
            >
              <Link href={`/insights/${art.slug}`} className="block">
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

                  <h2 className="font-oswald text-2xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors leading-tight mb-3">
                    {art.title}
                  </h2>

                  <p className="text-sm text-foreground-muted font-light leading-relaxed line-clamp-3 mb-6">
                    {art.summary}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-oswald uppercase tracking-widest text-brand-accent font-bold group-hover:text-white transition-colors">
                    <span>Read Full Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
