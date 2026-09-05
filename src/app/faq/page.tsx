import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | BrandEx Media",
  description:
    "Common questions regarding BrandEx Media's creative production process, retainers, pricing, timelines, and deliverables.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What makes BrandEx Media different from traditional digital marketing agencies?",
      a: "Traditional agencies either produce pretty videos that fail to convert or run generic ads with low-quality stock creative. BrandEx unifies director-level cinema production with aggressive performance media buying under one roof, ensuring every visual asset is engineered to drive tangible commercial ROI.",
    },
    {
      q: "How does the production timeline typically work?",
      a: "Standard brand shoot or viral reel packages typically take 2-3 weeks from initial strategy briefing to final color-graded delivery. Comprehensive website development and brand identity overhauls range from 4 to 8 weeks depending on scope.",
    },
    {
      q: "Do you offer ongoing monthly retainers or only one-off projects?",
      a: "Both. Many of our partners start with a discrete production campaign (e.g., a commercial shoot or custom web platform) and transition into our monthly Growth Packages (Standard, Professional, or Premium) for ongoing reels, Meta ad management, and continuous optimization.",
    },
    {
      q: "Do you collaborate with brands outside of India?",
      a: "Yes. BrandEx maintains operations serving both domestic clients and international brands across the United States. We manage remote creative direction, localized social distribution, and cross-border digital campaigns seamlessly.",
    },
    {
      q: "Who owns the raw footage and creative assets after completion?",
      a: "Upon final invoice settlement, 100% of commercial rights and high-resolution master files are transferred to your business. We retain portfolio showcase rights unless under a specific mutual NDA.",
    },
    {
      q: "How do we get started?",
      a: "Simply submit your brief through our Project Planner or message us directly on WhatsApp (+91 9010205771). Our founders review your requirements and schedule an introductory strategy session within 24 hours.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Header */}
      <section className="relative w-full py-20 md:py-32 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-mid/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              // Client Knowledge Base
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6">
            QUESTIONS? <span className="text-brand-accent">WE HAVE ANSWERS.</span>
          </h1>

          <p className="text-foreground-muted text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our production standards, retainer structures, pricing transparency, and collaboration process.
          </p>
        </div>
      </section>

      {/* FAQs List */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-brand-accent/40 transition-colors"
          >
            <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white mb-4 flex items-start gap-3">
              <span className="text-brand-accent font-mono text-xl mt-0.5">Q.</span>
              <span>{faq.q}</span>
            </h3>
            <p className="text-foreground-muted text-base leading-relaxed font-light pl-8 border-l border-white/10">
              {faq.a}
            </p>
          </div>
        ))}

        {/* Still Have Questions Box */}
        <div className="mt-16 glass-panel p-8 sm:p-12 rounded-3xl border border-brand-accent/30 text-center">
          <h3 className="font-oswald text-3xl font-bold uppercase text-white mb-2">
            Have a Specific Question for Our Directors?
          </h3>
          <p className="text-sm text-foreground-muted font-light max-w-md mx-auto mb-8">
            Connect directly with Pradeep Lenka or Mahesh Arjilli for immediate answers on your campaign.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(196,232,109,0.3)]"
            >
              <span>Submit Project Brief</span>
            </Link>
            <a
              href="https://wa.me/919010205771"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-oswald text-xs uppercase tracking-widest font-bold border border-white/20 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-brand-accent" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
