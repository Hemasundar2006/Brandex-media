import type { Metadata } from "next";
import Team from "@/components/Team";
import Link from "next/link";
import { ArrowRight, Award, Globe, Shield, Sparkles, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | BrandEx Media",
  description:
    "Learn about BrandEx Media, our 3-year legacy of strategic marketing, cinematic visual production, and measurable digital growth.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Uncompromising Visual Craft",
      desc: "Every frame, campaign, and digital asset is engineered with cinema-grade lighting, deliberate color grading, and razor-sharp typography.",
      icon: <Sparkles className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "Performance & Audience Psychology",
      desc: "We marry visual allure with deep consumer psychology and algorithmic intelligence to generate genuine business impact.",
      icon: <Target className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "One Unified Creative Partner",
      desc: "Eliminating agency silos. Strategy, creation, digital execution, and amplification flow through one cohesive creative engine.",
      icon: <Shield className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "Global Reach, Local Depth",
      desc: "Headquartered in Visakhapatnam, Andhra Pradesh, with international operations serving brands across India and the United States.",
      icon: <Globe className="w-6 h-6 text-brand-accent" />,
    },
  ];

  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-36 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-mid/10 blur-[160px] pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              // The BrandEx Origin &amp; Mission
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-8 leading-[0.95]">
            WE BUILD <span className="text-brand-accent">BRANDS</span> THAT DEMAND ATTENTION.
          </h1>

          <div className="max-w-4xl border-l-4 border-brand-accent pl-6 md:pl-10 mt-12 mb-16">
            <p className="text-xl md:text-2xl text-foreground-muted font-light leading-relaxed">
              At <strong className="text-white font-semibold">BrandEx Media</strong>, we bring{" "}
              <span className="text-brand-accent font-semibold">3 years of marketing excellence</span>, 
              helping ambitious brands achieve exponential market growth through{" "}
              <span className="text-white font-medium">creative strategy</span> and{" "}
              <span className="text-brand-accent font-semibold">measurable results</span>. 
              We have partnered with clients across diverse industries worldwide, managing high-performing influencer accounts and producing premium content with cinema-grade professional gear to deliver lasting brand authority.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-28 px-6 bg-background-center/20 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold block mb-2">
              // Our Guiding Principles
            </span>
            <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
              WHAT DEFINES <span className="text-brand-accent">BRANDEX</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-brand-accent/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {v.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders & Leadership */}
      <Team />

      {/* Bottom Conversion Banner */}
      <section className="w-full py-20 px-6 bg-background-outer text-center">
        <div className="max-w-4xl mx-auto glass-panel p-10 sm:p-16 rounded-[2.5rem] border border-brand-accent/30 shadow-2xl">
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-white mb-4">
            Ready to collaborate with BrandEx?
          </h2>
          <p className="text-foreground-muted text-base max-w-xl mx-auto mb-8 font-light">
            Whether you need a complete rebrand, high-converting commercial video, or viral social scaling, we are ready.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-accent text-background-outer font-oswald text-sm uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_25px_rgba(196,232,109,0.4)]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
