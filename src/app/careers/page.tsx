import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Opportunities | BrandEx Media",
  description:
    "Join the BrandEx Media team. We are looking for visionary video creators, brand strategists, and performance marketers.",
};

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Cinematographer & Video Editor",
      discipline: "Production",
      type: "Full-Time",
      location: "Visakhapatnam Studio / On-Location",
      desc: "Lead studio and lifestyle video production, operating cinema camera packages, gimbal movement, and editing viral vertical reels.",
    },
    {
      title: "Performance Media Buyer & Growth Lead",
      discipline: "Digital Marketing",
      type: "Full-Time",
      location: "Remote / Hybrid",
      desc: "Manage high-budget Meta and Google Ad funnels for consumer brands, directing creative testing and conversion attribution.",
    },
    {
      title: "Brand Identity & Graphic Designer",
      discipline: "Creative",
      type: "Contract to Full-Time",
      location: "Remote",
      desc: "Craft high-contrast promotional posters, bespoke typographic guidelines, and cross-platform digital collateral.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Header */}
      <section className="relative w-full py-20 md:py-32 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-mid/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              // Creative Opportunities
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6">
            BUILD WITH <span className="text-brand-accent">BRANDEX.</span>
          </h1>

          <p className="text-foreground-muted text-lg md:text-2xl font-light max-w-3xl leading-relaxed">
            We are always scouting ambitious directors, editors, designers, and marketers who obsess over visual craft and commercial performance.
          </p>
        </div>
      </section>

      {/* Positions List */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
          >
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-xs font-mono text-brand-accent font-bold">
                  {job.discipline}
                </span>
                <span className="text-xs font-mono text-white/50">{job.type}</span>
                <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  {job.location}
                </span>
              </div>

              <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors mb-2">
                {job.title}
              </h2>

              <p className="text-sm text-foreground-muted font-light leading-relaxed">
                {job.desc}
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href={`mailto:hello@brandexmedia.com?subject=Application:%20${encodeURIComponent(job.title)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-brand-accent hover:text-background-outer text-white font-oswald text-xs uppercase tracking-widest font-bold transition-all border border-white/15"
              >
                <span>Apply via Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}

        {/* Spontaneous Application Box */}
        <div className="mt-16 glass-panel p-8 sm:p-12 rounded-3xl border border-brand-accent/30 text-center">
          <Sparkles className="w-8 h-8 text-brand-accent mx-auto mb-3" />
          <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
            Don&apos;t See Your Discipline?
          </h3>
          <p className="text-sm text-foreground-muted font-light max-w-xl mx-auto mb-6">
            We are always open to visionary collaborators, freelancers, and creative directors. Send your portfolio directly to our leadership.
          </p>
          <a
            href="mailto:hello@brandexmedia.com?subject=Spontaneous%20Portfolio%20Submission"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(196,232,109,0.3)]"
          >
            <span>Send General Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
