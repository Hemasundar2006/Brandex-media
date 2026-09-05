import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clapperboard, TrendingUp, MonitorSmartphone, Share2, Sparkles, Megaphone, Film } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | BrandEx Media",
  description:
    "Explore BrandEx Media's full suite of creative services: Content Creation, Social Media Management, Branding, Digital Marketing, Influencer Campaigns, Web Development, and Video Production.",
};

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      slug: "content-creation",
      title: "Content Creation",
      icon: <Sparkles className="w-6 h-6 text-brand-accent" />,
      desc: "Visual storytelling engineered to stop the scroll. We craft high-impact brand shoots, viral reels, 3D motion graphics, and editorial product styling.",
      deliverables: ["High-Impact Brand Shoots", "Viral Cinematic Reel Making", "3D & Motion Posters", "Product Styling & Visual Sets"],
    },
    {
      num: "02",
      slug: "social-media-management",
      title: "Social Media Management",
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      desc: "Comprehensive channel dominance. We architect algorithmic growth strategies, manage daily engagement, and execute high-converting Meta ad campaigns.",
      deliverables: ["Daily Algorithmic Engagement", "Meta Ad Running & Retargeting", "Profile Grid Architecture", "Organic Community Growth"],
    },
    {
      num: "03",
      slug: "branding-and-identity",
      title: "Branding & Identity",
      icon: <Megaphone className="w-6 h-6 text-brand-accent" />,
      desc: "Transforming ambitious businesses into iconic brands. We build visual identities, brand guidelines, bespoke typography, and high-converting marketing collateral.",
      deliverables: ["Brand Identity & Visual System", "High-Converting Brand Creatives", "Typography & Color Architecture", "Comprehensive Brand Guidelines"],
    },
    {
      num: "04",
      slug: "digital-marketing",
      title: "Digital Marketing",
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      desc: "Data-driven performance campaigns that generate measurable ROI. Precision audience segmentation, conversion funnels, and paid media management.",
      deliverables: ["Full Meta & Google Ads Execution", "Audience Funnel Optimization", "Conversion Rate Optimization", "Transparent ROI Reporting"],
    },
    {
      num: "05",
      slug: "influencer-marketing",
      title: "Influencer Marketing",
      icon: <Share2 className="w-6 h-6 text-brand-accent" />,
      desc: "Connecting brands with trusted creators. We curate tiered influencer rosters, direct authentic campaigns, and track real conversion attribution.",
      deliverables: ["Tiered Creator Curation", "Influencer Account Management", "Campaign Creative Direction", "Tracking & Attribution Analytics"],
    },
    {
      num: "06",
      slug: "web-development",
      title: "Web Development",
      icon: <MonitorSmartphone className="w-6 h-6 text-brand-accent" />,
      desc: "Modern Next.js web experiences built for blistering speed, aesthetic immersion, and maximum commercial conversions.",
      deliverables: ["Custom Next.js & React Architectures", "Modern 2026 Responsive Experiences", "Technical SEO Optimization", "Headless CMS Integration"],
    },
    {
      num: "07",
      slug: "video-production",
      title: "Commercial Production",
      icon: <Film className="w-6 h-6 text-brand-accent" />,
      desc: "Cinema-grade studio and location filmmaking. We bring lifestyle narratives to life with professional camera choreography, lighting, and sound.",
      deliverables: ["Lifestyle & Model Shoots", "Commercial Video Advertisements", "Cinematic Brand Showreels", "Professional Color Grading & Audio"],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Hero Header */}
      <section className="relative w-full py-24 md:py-36 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-brand-mid/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              // Capabilities Directory
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6">
            OUR <span className="text-brand-accent">SERVICES.</span>
          </h1>

          <p className="text-foreground-muted text-lg md:text-2xl font-light max-w-3xl leading-relaxed">
            Everything your brand needs to scale under one unified creative roof. Explore our 7 core disciplines engineered for visual impact and commercial performance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-all duration-400 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                    {svc.icon}
                  </div>
                  <span className="font-mono text-sm text-brand-accent font-bold tracking-widest">
                    {svc.num}
                  </span>
                </div>

                <h2 className="font-oswald text-3xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors mb-3">
                  {svc.title}
                </h2>

                <p className="text-sm text-foreground-muted font-light leading-relaxed mb-6">
                  {svc.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {svc.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/70 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between text-xs font-oswald uppercase tracking-widest text-brand-accent font-bold group-hover:text-white transition-colors">
                <span>View Discipline Details</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
