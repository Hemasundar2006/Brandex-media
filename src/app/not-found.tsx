import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-bold text-white mb-4">404</h1>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Page Not <span className="text-brand-accent">Found.</span>
      </h2>
      <p className="text-foreground-muted text-lg max-w-lg mb-12">
        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      
      <Link href="/" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-mid hover:bg-brand-mid/80 text-white font-bold rounded-xl transition-colors">
        Return Home <ArrowRight className="w-5 h-5" />
      </Link>
    </main>
  );
}
