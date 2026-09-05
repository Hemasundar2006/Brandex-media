import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Creator Network & Influencer Marketing | BrandEx Media",
  description:
    "Partner with BrandEx Media's elite roster of regional, fashion, cinema, and mega creators. Authentic campaigns delivering millions of verified impressions.",
};

const creators = [
  {
    name: "1.6 Million Shivanna",
    handle: "@shivanna_official",
    reach: "1.6M+ Community",
    tier: "Mega Creator",
    category: "Entertainment & Cinema",
    image: "/influencers/shivanna-1-6m.jpeg",
    tagline: "Mass regional celebrity milestone celebration commanding millions of engagements.",
    deliverables: ["Milestone PR Campaigns", "Mass Brand Endorsement", "Cinema Integration"],
    slug: "creator-influencer-management",
  },
  {
    name: "Gaalishwasam Bandhamalle",
    handle: "BrandEx x Sinka Studios",
    reach: "Official Production",
    tier: "Cinema & Music Project",
    category: "Music Video & Film",
    image: "/influencers/music-video-brandex.jpeg",
    tagline: "Official music video starring Ishak Sinka, Nekkanti Divya, and Allari Apsara.",
    deliverables: ["Full Film Production", "Celebrity Casting", "Digital Launch Promotion"],
    slug: "brandex-music-video-production",
  },
  {
    name: "Urban Fashion & Lifestyle Creator",
    handle: "@brandex_lifestyle",
    reach: "150K+ Active Followers",
    tier: "Macro Creator",
    category: "D2C Fashion & Grooming",
    image: "/influencers/creator-fashion-male.jpeg",
    tagline: "Sleek lookbooks, contemporary styling, and modern male lifestyle campaigns.",
    deliverables: ["Lookbook Reels", "Product Unboxing", "Exclusive Discount Codes"],
    slug: "creator-influencer-management",
  },
  {
    name: "Traditional & Ethnic Cultural Creator",
    handle: "@brandex_ethnic",
    reach: "250K+ Regional Reach",
    tier: "Cultural Ambassador",
    category: "Ethnic Fashion & Festive",
    image: "/influencers/creator-traditional-female.jpeg",
    tagline: "Deep cultural resonance and high-converting festive saree and retail storytelling.",
    deliverables: ["Festive Saree Shoots", "Regional Brand Endorsements", "Store Walkthroughs"],
    slug: "creator-influencer-management",
  },
  {
    name: "Grassroots & Regional Viral Creator",
    handle: "@brandex_regional",
    reach: "500K+ Viral Views",
    tier: "Grassroots Viral",
    category: "Regional Humor & Rural Life",
    image: "/influencers/creator-rural-lifestyle.jpeg",
    tagline: "Hyper-authentic regional comedy and rural community storytelling with 100% organic virality.",
    deliverables: ["Native Skit Integrations", "Organic Narrative Placement", "Mass Regional Virality"],
    slug: "creator-influencer-management",
  },
];

export default function InfluencersPage() {
  return (
    <main className="w-full min-h-screen bg-background-outer text-white pt-24 pb-20">
      {/* Header */}
      <section className="relative w-full py-20 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-accent/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Users className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              // BrandEx Creator Management & Influencer Roster
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6">
            CREATOR <span className="text-brand-accent">ROSTER.</span>
          </h1>

          <p className="text-foreground-muted text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
            Consumers trust individuals far more than corporate advertisements. BrandEx bridges forward-thinking brands with verified creators, celebrities, and grassroots storytellers across India and beyond.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="font-oswald text-3xl sm:text-4xl font-bold text-brand-accent">1.6M+</p>
              <p className="text-xs font-mono uppercase text-white/60 tracking-wider mt-1">Peak Creator Milestone</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="font-oswald text-3xl sm:text-4xl font-bold text-white">10M+</p>
              <p className="text-xs font-mono uppercase text-white/60 tracking-wider mt-1">Monthly Creator Views</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="font-oswald text-3xl sm:text-4xl font-bold text-brand-accent">50+</p>
              <p className="text-xs font-mono uppercase text-white/60 tracking-wider mt-1">Vetted Talent Roster</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="font-oswald text-3xl sm:text-4xl font-bold text-white">100%</p>
              <p className="text-xs font-mono uppercase text-white/60 tracking-wider mt-1">Brand-Safe Attribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-2">
              // Available for Campaigns & Collaborations
            </span>
            <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white">
              Featured <span className="text-brand-accent">Influencers & Projects</span>
            </h2>
          </div>
          <p className="text-foreground-muted text-sm md:text-base max-w-md mt-4 md:mt-0 font-light">
            Each creator is vetted for authentic engagement rates, audience demographics, and high conversion potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((c, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-brand-accent/50 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/60">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-background-outer/80 backdrop-blur-md text-brand-accent border border-brand-accent/30 font-bold">
                      {c.tier}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-bold">
                      {c.reach}
                    </span>
                    <h3 className="font-oswald text-2xl font-bold uppercase text-white mt-0.5">
                      {c.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-brand-accent font-mono uppercase tracking-widest font-semibold mb-2">
                    {c.category}
                  </p>
                  <p className="text-sm text-foreground-muted font-light leading-relaxed mb-6">
                    {c.tagline}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    {c.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                <Link
                  href={`/portfolio/${c.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-brand-accent hover:text-background-outer border border-white/10 text-white font-oswald text-xs uppercase tracking-widest font-bold transition-all duration-300"
                >
                  <span>Explore Campaign</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why BrandEx Influencer Management */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="glass-panel p-8 sm:p-12 rounded-[2.5rem] border border-white/10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-3">
              // Why BrandEx Creator Operations
            </span>
            <h2 className="font-oswald text-3xl sm:text-5xl font-bold uppercase text-white mb-6">
              Strategic Creator Deployment, Not Random Shouts.
            </h2>
            <p className="text-foreground-muted text-base leading-relaxed mb-8 font-light">
              Most brands lose budget hiring influencers with inflated follower counts and detached audiences. BrandEx operates direct management over talent, handling contract drafting, cinema-grade shooting support, and whitelisting paid Meta ads through creator accounts for measurable conversions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Full contract & usage rights negotiation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">In-house studio gear & DOP production support</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Trackable affiliate links & conversion pixels</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Paid Meta & YouTube whitelisting amplification</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-accent text-background-outer font-oswald text-sm uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_25px_rgba(196,232,109,0.35)]"
              >
                <span>Hire Our Creator Roster</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919010205771?text=Hi%20BrandEx,%20I'm%20interested%20in%20partnering%20with%20your%20Influencer%20Roster."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-oswald text-sm uppercase tracking-widest font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4 text-brand-accent" />
                <span>Chat with Talent Director</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
