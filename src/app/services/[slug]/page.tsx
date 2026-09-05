import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, MessageSquare, Users } from "lucide-react";
import { notFound } from "next/navigation";

interface ServiceData {
  title: string;
  num: string;
  tagline: string;
  overview: string;
  deliverables: string[];
  workflow: { step: string; desc: string }[];
  impact: string;
}

const serviceCatalog: Record<string, ServiceData> = {
  "content-creation": {
    title: "Content Creation",
    num: "01",
    tagline: "Visual storytelling engineered to stop the scroll and demand market attention.",
    overview:
      "At BrandEx Media, we treat content as your brand's primary digital currency. We combine cinema-grade cinema lenses, bespoke studio lighting, and creative direction to produce visual assets that cut through modern feeds and generate immediate consumer desire.",
    deliverables: [
      "Custom Model & Brand Shoots",
      "High-Converting Viral Reels (Vertical Format)",
      "3D & Animated Motion Posters",
      "Editorial Product Staging & Macro Shoots",
      "Multi-Platform Social Asset Kits",
    ],
    workflow: [
      { step: "Creative Briefing", desc: "Aligning on brand tone, demographic hooks, and primary campaign objectives." },
      { step: "Set & Prop Design", desc: "Crafting customized visual backdrops, talent styling, and lighting choreography." },
      { step: "Cinema Production", desc: "Shooting on professional cinema-grade gear with director-level framing." },
      { step: "Post-Production", desc: "Precision color grading, sound design, hook optimization, and format exports." },
    ],
    impact: "Boost organic engagement by up to 300% and reduce customer acquisition costs.",
  },
  "social-media-management": {
    title: "Social Media Management",
    num: "02",
    tagline: "Full-scale algorithmic dominance and active community cultivation.",
    overview:
      "Posting is easy; building an obsessed audience requires strategic discipline. We manage your social presence from end to end—architecting high-frequency content schedules, monitoring real-time algorithm shifts, and converting casual followers into brand advocates.",
    deliverables: [
      "Full Account Architecture & Bio Optimization",
      "Daily Audience Engagement & Direct Message Handling",
      "Weekly High-Retention Reel Deployments",
      "Meta Ad Integration & Custom Retargeting",
      "Monthly Analytical Performance Audits",
    ],
    workflow: [
      { step: "Profile Audit", desc: "Identifying audience drop-off points, aesthetic inconsistencies, and growth ceilings." },
      { step: "Content Matrix", desc: "Designing a monthly 30-day narrative calendar balancing education, aspiration, and offers." },
      { step: "Daily Distribution", desc: "Posting at algorithmic peak hours with targeted hashtags, audio trends, and copy." },
      { step: "Analytics Iteration", desc: "Doubling down on top-performing creative formats based on hard engagement data." },
    ],
    impact: "Consistent month-over-month follower growth and compound brand recall.",
  },
  "branding-and-identity": {
    title: "Branding & Identity",
    num: "03",
    tagline: "Iconic visual systems and guidelines built for market leadership.",
    overview:
      "Your brand is the mental footprint you leave behind. BrandEx crafts timeless visual identities—from distinctive logo marks and bespoke typography to authoritative tone of voice—ensuring you stand out unmistakably in any industry.",
    deliverables: [
      "Core Logo Mark, Monogram & Responsive Lockups",
      "Comprehensive Typography & Color Guidelines",
      "Digital & Physical Collateral Templates",
      "High-Converting Brand Creative Direction",
      "Packaging, Merchandise & Environmental Mockups",
    ],
    workflow: [
      { step: "Brand Archetype", desc: "Defining your core market positioning, target emotional resonance, and brand voice." },
      { step: "Visual Exploration", desc: "Developing concept directions with divergent moodboards and font pairings." },
      { step: "System Architecture", desc: "Refining the selected mark into vector standards with exact color values." },
      { step: "Brand Manual", desc: "Delivering a comprehensive brand book ensuring perfect consistency across all partners." },
    ],
    impact: "Commands premium pricing and builds instant institutional credibility.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    num: "04",
    tagline: "Data-driven performance campaigns that generate measurable revenue.",
    overview:
      "We build customer acquisition funnels that convert clicks into capital. BrandEx executes targeted Meta, Google, and omnichannel ad campaigns backed by rigorous A/B testing and transparent ROI attribution.",
    deliverables: [
      "Meta (Instagram & Facebook) Ad Campaigns",
      "Google Search & Display Advertising",
      "High-Converting Landing Page Design",
      "Audience Retargeting & Custom Lookalikes",
      "Real-Time Conversion Tracking & Attribution",
    ],
    workflow: [
      { step: "Funnel Mapping", desc: "Structuring cold, warm, and hot audience journeys to minimize cost-per-lead." },
      { step: "Creative Testing", desc: "Deploying multivariate ad creatives to isolate top-converting hooks and copy." },
      { step: "Budget Optimization", desc: "Aggressively scaling winning ad sets while trimming underperforming segments." },
      { step: "Attribution", desc: "Measuring true customer lifetime value and cost per acquired customer." },
    ],
    impact: "Predictable, scalable customer acquisition with verified positive ROAS.",
  },
  "influencer-marketing": {
    title: "Influencer Marketing",
    num: "05",
    tagline: "Connecting your brand with authentic creators who drive sales.",
    overview:
      "Consumers trust individuals more than corporate ads. We manage end-to-end influencer partnerships—curating vetted creators whose personal aesthetic and followers align precisely with your target demographic.",
    deliverables: [
      "Tiered Creator Curation & Vetting",
      "Contract Negotiations & Usage Rights",
      "Creative Campaign Direction & Briefing",
      "Tracking Links, Promo Codes & Attribution",
      "Repurposing Content for Paid Meta Ads",
    ],
    workflow: [
      { step: "Creator Sourcing", desc: "Vetting creator engagement rates, bot ratios, and demographic fit." },
      { step: "Creative Briefing", desc: "Providing structured guidelines while preserving the creator's authentic voice." },
      { step: "Execution Management", desc: "Reviewing drafts, scheduling coordinated releases, and ensuring timely delivery." },
      { step: "Post-Campaign Whitelisting", desc: "Running paid ads through creator handles for maximum conversion rates." },
    ],
    impact: "Unlocks immediate social proof and drives high-intent referral traffic.",
  },
  "web-development": {
    title: "Web Development",
    num: "06",
    tagline: "Modern Next.js web applications built for speed and conversions.",
    overview:
      "Your website is your central digital headquarters. BrandEx builds bespoke, high-performance web applications using modern Next.js and React architectures. We guarantee sub-second load times, smooth micro-interactions, and frictionless checkout flows.",
    deliverables: [
      "Custom Next.js & React Architectures",
      "Responsive 2026 Mobile-First Engineering",
      "Technical SEO & Schema Optimization",
      "CMS Integration for Easy Internal Content Updates",
      "Core Web Vitals 95+ Performance Scores",
    ],
    workflow: [
      { step: "Wireframing", desc: "Designing conversion-optimized information architecture and page journeys." },
      { step: "UI/UX High-Fidelity Design", desc: "Prototyping responsive desktop and mobile viewports with BrandEx styling." },
      { step: "Frontend Engineering", desc: "Building modular, type-safe Next.js code with zero bloat and smooth transitions." },
      { step: "SEO & Launch", desc: "Configuring canonical tags, OpenGraph schemas, CDN caching, and 301 redirects." },
    ],
    impact: "Sub-second load speeds, reduced bounce rates, and higher conversion rates.",
  },
  "video-production": {
    title: "Commercial Production",
    num: "07",
    tagline: "Cinema-grade studio and location cinematography with professional gear.",
    overview:
      "From high-fashion model campaigns to commercial product videos, BrandEx operates an elite production unit. We handle every aspect of the filmmaking pipeline: storyboards, location scouting, set lighting, drone cinematography, and cinematic sound design.",
    deliverables: [
      "Commercial Video Ads & Brand Films",
      "Studio & On-Location Model Shoots",
      "Product Demonstration & Lifestyle Cinematography",
      "High-Octane Brand Showreels",
      "Cinema Color Grading & Audio Engineering",
    ],
    workflow: [
      { step: "Pre-Production", desc: "Storyboarding, moodboards, talent casting, and call sheets." },
      { step: "Production Day", desc: "Directing cinema camera packages, specialized lighting, and on-set audio." },
      { step: "Editing & Sound", desc: "Rhythmic cutdown, custom sound design, Foley, and score mixing." },
      { step: "Final Master", desc: "Mastering in 4K UHD, HDR, and social-optimized vertical formats." },
    ],
    impact: "Breathtaking visual prestige that elevates your brand perception instantly.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceCatalog[slug];
  if (!service) {
    return {
      title: "Service Not Found | BrandEx Media",
    };
  }
  return {
    title: `${service.title} | BrandEx Media Services`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceCatalog[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-accent hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-b border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-brand-accent font-bold">
            SERVICE {service.num}
          </span>
          <span className="w-8 h-[1px] bg-brand-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-white/50">
            BrandEx Core Capability
          </span>
        </div>

        <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.95]">
          {service.title}
        </h1>

        <p className="text-xl sm:text-2xl text-brand-accent font-light max-w-3xl leading-relaxed mb-8">
          {service.tagline}
        </p>

        <p className="text-base sm:text-lg text-foreground-muted font-light max-w-3xl leading-relaxed">
          {service.overview}
        </p>
      </section>

      {/* Deliverables & Workflow Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Deliverables Column */}
        <div className="lg:col-span-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-4">
            // Core Deliverables
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-white mb-8">
            What You Receive
          </h2>

          <div className="space-y-4">
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-brand-accent/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-brand-accent/10 border border-brand-accent/20">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-1">
              Expected Commercial Impact
            </span>
            <p className="text-sm text-white font-medium">{service.impact}</p>
          </div>
        </div>

        {/* Workflow Column */}
        <div className="lg:col-span-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block mb-4">
            // Execution Roadmap
          </span>
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-white mb-8">
            How We Execute
          </h2>

          <div className="space-y-6">
            {service.workflow.map((w, index) => (
              <div
                key={w.step}
                className="glass-panel p-6 rounded-2xl border border-white/10 flex items-start gap-5 hover:border-brand-accent/40 transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center font-mono text-sm font-bold text-brand-accent flex-shrink-0">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-oswald text-xl font-bold uppercase text-white mb-1">
                    {w.step}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-muted font-light leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Influencer Roster Section for Influencer Marketing */}
      {slug === "influencer-marketing" && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-3">
                <Users className="w-3.5 h-3.5 text-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
                  // Creator Talent Roster
                </span>
              </div>
              <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white tracking-tight">
                Featured <span className="text-brand-accent">Creator Network</span>
              </h2>
            </div>
            <p className="text-foreground-muted text-sm md:text-base max-w-md mt-4 md:mt-0 font-light">
              From mega creators commanding millions of followers to hyper-engaged niche cultural storytellers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "1.6 Million Shivanna",
                niche: "Mega Creator // Milestone Campaign",
                reach: "1.6M+ Community",
                image: "/influencers/shivanna-1-6m.jpeg",
                tag: "Celebrity & Viral",
                slug: "creator-influencer-management",
              },
              {
                name: "Gaalishwasam Bandhamalle",
                niche: "Music Video & Cinema Production",
                reach: "BrandEx & Sinka Studios",
                image: "/influencers/music-video-brandex.jpeg",
                tag: "Celebrity Music Project",
                slug: "brandex-music-video-production",
              },
              {
                name: "Urban Fashion & Lifestyle Creator",
                niche: "D2C Styling & Male Grooming",
                reach: "High-Intent Urban Audience",
                image: "/influencers/creator-fashion-male.jpeg",
                tag: "Fashion & Lifestyle",
                slug: "fashion-lifestyle-creator-network",
              },
              {
                name: "Traditional & Ethnic Heritage Creator",
                niche: "Cultural & Festive Brand Storytelling",
                reach: "Regional Saree & Retail",
                image: "/influencers/creator-traditional-female.jpeg",
                tag: "Culture & Heritage",
                slug: "ethnic-cultural-influencer-campaigns",
              },
              {
                name: "Grassroots & Rural Community Creator",
                niche: "Hyper-Authentic Regional Humor",
                reach: "100% Organic Viral Reach",
                image: "/influencers/creator-rural-lifestyle.jpeg",
                tag: "Mass Regional",
                slug: "grassroots-regional-creators",
              },
            ].map((creator, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-brand-accent/50 transition-all duration-500 shadow-xl flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-outer via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-background-outer/80 backdrop-blur-md text-brand-accent border border-brand-accent/30 font-bold">
                      {creator.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative -mt-8 z-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block mb-1">
                    {creator.reach}
                  </span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors mb-1">
                    {creator.name}
                  </h3>
                  <p className="text-xs text-foreground-muted font-light mb-4">
                    {creator.niche}
                  </p>
                  <Link
                    href={`/portfolio/${creator.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-oswald uppercase tracking-widest text-brand-accent font-bold group-hover:text-white transition-colors"
                  >
                    <span>View Campaign Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Box */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="glass-panel p-10 sm:p-14 rounded-[2.5rem] border border-brand-accent/30 text-center flex flex-col items-center justify-center">
          <Sparkles className="w-10 h-10 text-brand-accent mb-4" />
          <h2 className="font-oswald text-3xl sm:text-5xl font-bold uppercase text-white mb-4">
            Ready to scale with {service.title}?
          </h2>
          <p className="text-foreground-muted text-base max-w-xl mb-8 font-light">
            Contact our directors directly to structure a customized proposal tailored to your commercial targets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-accent text-background-outer font-oswald text-sm uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_25px_rgba(196,232,109,0.35)]"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/919010205771?text=Hi%20BrandEx,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-oswald text-sm uppercase tracking-widest font-bold transition-all"
            >
              <MessageSquare className="w-4 h-4 text-brand-accent" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
