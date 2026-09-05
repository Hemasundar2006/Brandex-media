"use client";

import { Check, Star, ArrowRight, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Standard",
      subtitle: "Essential Foundation",
      price: "₹25,000",
      period: "/ month",
      desc: "Perfect for emerging brands looking to establish consistent visual authority and organic social reach.",
      features: [
        "6 Targeted Cinematic Reels",
        "12 Custom Brand Posters",
        "Full Social Account Management",
        "Meta Ad Campaign Execution",
        "3 Animated Motion Posters",
        "1 Dedicated Commercial Ad",
        "Monthly Performance Analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      subtitle: "Aggressive Market Scale",
      price: "₹45,000",
      period: "/ month",
      desc: "Engineered for scaling businesses that require high-velocity content and dedicated advertising funnels.",
      features: [
        "10 Tailored Cinematic Reels",
        "20 Custom Brand Posters",
        "Full Meta & Instagram Ad Running",
        "Advanced SEO & Bio Optimization",
        "5 Dynamic Motion Posters",
        "Daily Active Profile Engagement",
        "Bi-Weekly Strategy Consulting",
        "Priority Set Production",
      ],
      popular: true,
    },
    {
      name: "Premium",
      subtitle: "Category Dominance",
      price: "₹80,000",
      period: "/ month",
      desc: "Complete creative studio takeover. Full-scale commercial filmmaking, unlimited collateral, and custom web engineering.",
      features: [
        "Dedicated Senior Media Manager",
        "Comprehensive Next.js Web Platform",
        "13 Premium Commercial Reels",
        "Unlimited Custom Posters",
        "Full Meta & Google Ads Campaigns",
        "High-Tier Creative Studio Video Ads",
        "Influencer Outreach Management",
        "24/7 Priority Director Access",
      ],
      popular: false,
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
              // Transparent Growth Investments
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6">
            GROWTH <span className="text-brand-accent">PACKAGES.</span>
          </h1>

          <p className="text-foreground-muted text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Transparent, performance-driven agency partnerships. Every tier includes cinema-grade assets, strategic execution, and verifiable business ROI.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`relative glass-panel rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-400 ${
                plan.popular
                  ? "border-brand-accent/80 shadow-[0_0_50px_rgba(196,232,109,0.2)] bg-white/[0.06] transform lg:-translate-y-4"
                  : "border-white/10 hover:border-brand-accent/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(196,232,109,0.5)]">
                  <Star className="w-3.5 h-3.5 fill-background-outer" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                    {plan.subtitle}
                  </span>
                  <h3 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-white mt-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-foreground-muted font-light mt-2 leading-relaxed">
                    {plan.desc}
                  </p>
                </div>

                <div className="py-6 border-y border-white/10 mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-oswald text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="font-mono text-sm text-white/50">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3.5 mb-10">
                  <p className="text-xs font-mono uppercase tracking-widest text-white/60 font-bold mb-4">
                    Package Inclusions:
                  </p>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-white/90">
                      <div className="w-4 h-4 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-accent">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`https://wa.me/919010205771?text=Hi%20BrandEx,%20I'm%20ready%20to%20get%20started%20with%20the%20${encodeURIComponent(plan.name)}%20Package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-oswald text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.popular
                      ? "bg-brand-accent text-background-outer hover:bg-white shadow-[0_0_25px_rgba(196,232,109,0.35)]"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Choose {plan.name}</span>
                </a>

                <Link
                  href="/contact"
                  className="text-center text-xs font-mono text-white/50 hover:text-brand-accent transition-colors py-1"
                >
                  Or request custom enterprise scope →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Scope Callout */}
        <div className="mt-16 glass-panel p-8 sm:p-12 rounded-[2.5rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-1">
                Need a Bespoke Project or One-Time Production?
              </h3>
              <p className="text-sm text-foreground-muted font-light max-w-xl">
                We also execute standalone commercial video productions, website developments, and multi-day model shoots. Contact us for a tailored line-item quote.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(196,232,109,0.3)] flex-shrink-0"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
