import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  overview: string;
  challenge: string;
  strategy: string;
  servicesUsed: string[];
  results: { metric: string; label: string }[];
  heroImage?: string;
  heroVideo?: string;
  gallery: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  "premium-posters": {
    slug: "premium-posters",
    title: "Premium Poster Making & Visual Campaign",
    client: "BrandEx Campaign Series",
    category: "Branding & Art Direction",
    overview:
      "A comprehensive design and visual art campaign engineered to establish unmistakable category dominance through high-contrast graphic architecture.",
    challenge:
      "In a saturated digital landscape dominated by generic Canva templates, the brand suffered from audience fatigue, weak brand recall, and low interaction rates on social marketing assets.",
    strategy:
      "We rebuilt their visual design language from the ground up—implementing high-contrast typography hierarchy, bespoke cinema lighting references, and intentional color gradients derived strictly from brand guidelines.",
    servicesUsed: ["Branding", "Content Creation", "Graphic Design", "Social Media"],
    results: [
      { metric: "+180%", label: "Engagement Growth" },
      { metric: "2.4x", label: "Share Multiplier" },
      { metric: "100%", label: "Custom Visuals" },
    ],
    heroImage: "/Screenshot 2026-07-15 223705.png",
    gallery: [
      "/Screenshot 2026-07-15 223705.png",
      "/IMG_1710.PNG",
      "/IMG_1895.JPG.jpeg",
      "/IMG_6459.PNG",
    ],
  },
  "product-shoot": {
    slug: "product-shoot",
    title: "Editorial Product & Lifestyle Shoot",
    client: "Luxury Consumer Lifestyle",
    category: "Commercial Photography",
    overview:
      "A cinema-grade studio product showcase engineered to highlight textures, premium materials, and tactile luxury.",
    challenge:
      "The client struggled to communicate the exquisite physical quality and craftsmanship of their offerings through standard e-commerce photography, resulting in lower conversion rates and price resistance.",
    strategy:
      "We designed customized architectural studio sets featuring directional rim lighting, macro lens choreography, and atmospheric reflections to showcase the product as an art piece.",
    servicesUsed: ["Commercial Photography", "Content Creation", "Studio Sets", "Art Direction"],
    results: [
      { metric: "3.2M+", label: "Organic Reach" },
      { metric: "+95%", label: "Click-Through Rate" },
      { metric: "4K", label: "Cinema Master" },
    ],
    heroImage: "/Screenshot 2026-07-15 223711.png",
    gallery: [
      "/Screenshot 2026-07-15 223711.png",
      "/IMG_2249.JPG.jpeg",
      "/IMG_2250.JPG.jpeg",
      "/IMG_2201.JPG.jpeg",
    ],
  },
  "professional-reels": {
    slug: "professional-reels",
    title: "Viral Short-Form Reel Making",
    client: "Modern D2C Brands",
    category: "Short-Form Video Production",
    overview:
      "High-velocity vertical video production engineered specifically for social algorithm distribution and viewer retention.",
    challenge:
      "The brand's social channels suffered from falling reach and sub-3-second drop-offs, making it difficult to acquire new customers organically through Instagram Reels and YouTube Shorts.",
    strategy:
      "We deployed a structured hook-retain-convert framework—scripting sub-30-second narratives with dynamic pacing, synchronized sound design, and irresistible visual curiosity cues.",
    servicesUsed: ["Reel Making", "Video Production", "Social Media Management", "Digital Marketing"],
    results: [
      { metric: "5M+", label: "Video Views" },
      { metric: "+220%", label: "Follower Growth" },
      { metric: "84%", label: "Average Retention" },
    ],
    heroImage: "/Screenshot 2026-07-15 223720.png",
    heroVideo: "/IMG_0785.MP4",
    gallery: [
      "/Screenshot 2026-07-15 223720.png",
      "/IMG_3795.PNG",
      "/IMG_5385.PNG",
    ],
  },
  "model-shoots": {
    slug: "model-shoots",
    title: "Lifestyle & Model Shoots",
    client: "Apparel & Lifestyle Campaign",
    category: "Fashion & Lifestyle Production",
    overview:
      "Bringing brand identity and aesthetic lifestyle to life through authentic human emotion and cinema-grade lighting.",
    challenge:
      "The client needed to shift their market perception from an everyday functional supplier into a desirable, culturally relevant lifestyle brand that customers proudly associate with.",
    strategy:
      "BrandEx orchestrated complete model casting, location scouting, wardrobe styling, and lighting choreography to capture natural, aspirational moments that form immediate emotional resonance.",
    servicesUsed: ["Model Casting", "Location Cinematography", "Content Creation", "Brand Creatives"],
    results: [
      { metric: "42%", label: "Lead Growth" },
      { metric: "+150%", label: "Direct Inquiries" },
      { metric: "High-End", label: "Aesthetic Repositioning" },
    ],
    heroImage: "/Screenshot 2026-07-15 223727.png",
    gallery: [
      "/Screenshot 2026-07-15 223727.png",
      "/IMG_5385.PNG",
      "/IMG_3769.JPG.jpeg",
      "/IMG_6457.JPG (1).jpeg",
    ],
  },
  "creator-influencer-management": {
    slug: "creator-influencer-management",
    title: "1.6 Million Shivanna & Creator Network Campaigns",
    client: "Shivanna & BrandEx Creator Roster",
    category: "Influencer Marketing & Creator Management",
    overview:
      "Strategic creator partnerships and milestone campaigns engineered to command massive regional attention, authentic audience trust, and high-velocity viral distribution.",
    challenge:
      "Brands frequently struggle to source genuine creators with high-converting engagement rather than inflated vanity metrics, while ensuring sponsored messaging feels authentic to regional audiences.",
    strategy:
      "BrandEx curated a multi-tier creator roster—spanning mega creators like 1.6M Shivanna, urban lifestyle trendsetters, ethnic heritage creators, and grassroots rural storytellers. We engineered high-impact milestone visuals and managed coordinated cross-platform releases.",
    servicesUsed: ["Influencer Marketing", "Creator Management", "Creative Direction", "Viral Distribution"],
    results: [
      { metric: "1.6M+", label: "Milestone Reached" },
      { metric: "10M+", label: "Total Impressions" },
      { metric: "5.4%", label: "Average Engagement" },
    ],
    heroImage: "/influencers/shivanna-1-6m.jpeg",
    gallery: [
      "/influencers/shivanna-1-6m.jpeg",
      "/influencers/music-video-brandex.jpeg",
      "/influencers/creator-fashion-male.jpeg",
      "/influencers/creator-traditional-female.jpeg",
      "/influencers/creator-rural-lifestyle.jpeg",
    ],
  },
  "brandex-music-video-production": {
    slug: "brandex-music-video-production",
    title: "Gaalishwasam Bandhamalle // Music Video Production",
    client: "BrandEx Media & Sinka Studios",
    category: "Celebrity & Music Production",
    overview:
      "Official cinema-grade music video production starring Ishak Sinka, Nekkanti Divya, and Allari Apsara, directed by Swami Patnaik, with complete visual identity, poster architecture, and launch promotion by BrandEx Media.",
    challenge:
      "Executing high-budget cinematic visual storytelling, emotional character depth, and multi-cast choreography within tight production timelines and coordinated digital launch schedules.",
    strategy:
      "BrandEx coordinated full production execution—from creative screenplay alignment and DOP art capture to poster visual architecture, dubbing/SFX integration, and pre-release digital buzz campaigns.",
    servicesUsed: ["Video Production", "Art Direction", "Actor & Creator Casting", "Digital Promotion"],
    results: [
      { metric: "Official", label: "Music Video Release" },
      { metric: "Multi-Star", label: "Regional Cast" },
      { metric: "4K Cinema", label: "Master Quality" },
    ],
    heroImage: "/influencers/music-video-brandex.jpeg",
    gallery: [
      "/influencers/music-video-brandex.jpeg",
      "/influencers/shivanna-1-6m.jpeg",
      "/influencers/creator-traditional-female.jpeg",
      "/Screenshot 2026-07-15 223720.png",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) {
    return {
      title: "Case Study | BrandEx Media",
    };
  }
  return {
    title: `${study.title} | Case Study | BrandEx Media`,
    description: study.overview,
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Top Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-accent hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-xs font-mono text-brand-accent font-bold uppercase tracking-widest">
            {study.category}
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-white/50">
            Client: <strong className="text-white">{study.client}</strong>
          </span>
        </div>

        <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-white mb-8 leading-[0.95]">
          {study.title}
        </h1>

        <p className="text-xl sm:text-2xl text-foreground-muted font-light max-w-4xl leading-relaxed">
          {study.overview}
        </p>

        {/* Featured Media Container */}
        <div className="mt-12 w-full rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl relative">
          {study.heroVideo ? (
            <div className="aspect-video w-full relative bg-black flex items-center justify-center">
              <video
                src={study.heroVideo}
                autoPlay
                controls
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="aspect-[16/9] w-full relative">
              <Image
                src={study.heroImage || "/IMG_6459.PNG"}
                alt={study.title}
                fill
                priority
                className="object-cover"
                sizes="1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-transparent to-transparent opacity-60" />
            </div>
          )}
        </div>
      </section>

      {/* The Challenge & Strategy & Execution Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10">
        {/* Editorial Story Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* The Challenge */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-3">
              01 // The Challenge
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
              Overcoming The Plateau
            </h2>
            <p className="text-base sm:text-lg text-foreground-muted font-light leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* The Strategy */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-3">
              02 // The Strategy
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
              BrandEx Precision Direction
            </h2>
            <p className="text-base sm:text-lg text-foreground-muted font-light leading-relaxed">
              {study.strategy}
            </p>
          </div>

          {/* Services Used */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-3">
              03 // Execution Disciplines
            </span>
            <h2 className="font-oswald text-2xl font-bold uppercase text-white mb-4">
              Disciplines Deployed
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {study.servicesUsed.map((svc) => (
                <span
                  key={svc}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white font-medium flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Real Results Sticky Column */}
        <div className="lg:col-span-4">
          <div className="glass-panel p-8 rounded-3xl border border-brand-accent/30 sticky top-32 shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-2">
              Verified Metrics
            </span>
            <h3 className="font-oswald text-3xl font-bold uppercase text-white mb-8 pb-4 border-b border-white/10">
              The Results
            </h3>

            <div className="space-y-8">
              {study.results.map((res, i) => (
                <div key={i}>
                  <p className="font-oswald text-5xl font-extrabold text-brand-accent tracking-tight mb-1">
                    {res.metric}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-white/70">
                    {res.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-xl bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(196,232,109,0.3)]"
              >
                <span>Replicate These Results</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-3">
          // Visual Assets
        </span>
        <h2 className="font-oswald text-3xl sm:text-5xl font-bold uppercase text-white mb-10">
          Campaign Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {study.gallery.map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-white/10 group shadow-lg"
            >
              <Image
                src={imgSrc}
                alt={`${study.title} Frame ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="glass-panel p-10 sm:p-16 rounded-[2.5rem] border border-brand-accent/30 shadow-2xl">
          <Sparkles className="w-12 h-12 text-brand-accent mx-auto mb-4" />
          <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase text-white mb-4">
            Have a project like this?
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg max-w-xl mx-auto mb-8 font-light">
            Let us design, shoot, and scale your next landmark campaign.
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
