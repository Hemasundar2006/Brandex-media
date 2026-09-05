import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-[85vh] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-background-outer">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-mid/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        <div className="w-16 h-16 rounded-3xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 shadow-[0_0_30px_rgba(196,232,109,0.3)]">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-accent font-bold mb-2">
          ERROR 404 // ROUTE DOES NOT EXIST
        </span>

        <h1 className="font-oswald text-7xl sm:text-9xl font-bold uppercase tracking-tight text-white mb-2 leading-none">
          LOST YOUR <span className="text-brand-accent">WAY?</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground-muted font-light mb-10 leading-relaxed">
          &ldquo;Let&apos;s get you back to BrandEx Media.&rdquo; <br />
          The digital destination you requested has been archived or moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_25px_rgba(196,232,109,0.4)]"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-oswald text-xs uppercase tracking-widest font-bold transition-all"
          >
            <span>Explore Work</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
