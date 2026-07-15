import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${params.slug.replace(/-/g, ' ').toUpperCase()} | Case Study | BrandEx Media`,
  };
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const projectName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="w-full max-w-5xl mx-auto px-6 py-20 min-h-[80vh]">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>
      
      <div className="mb-12">
        <p className="text-brand-accent font-bold uppercase tracking-widest mb-4">Case Study</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {projectName}
        </h1>
        <p className="text-xl text-foreground-muted max-w-3xl">
          How we helped this client achieve a 300% increase in digital engagement through a complete brand overhaul.
        </p>
      </div>

      <div className="aspect-video bg-white/5 border border-white/10 rounded-3xl mb-16 flex items-center justify-center">
        <span className="text-white/30">[Hero Image/Video for {projectName}]</span>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 prose prose-invert prose-lg text-foreground-muted">
          <h2 className="text-2xl text-white font-semibold mb-4">The Challenge</h2>
          <p className="mb-8">
            The client approached us with a stale brand identity and failing conversion rates. They needed a modern refresh that would resonate with a younger demographic without alienating their core enterprise customers.
          </p>

          <h2 className="text-2xl text-white font-semibold mb-4">Our Approach</h2>
          <p>
            We conducted a full audit of their digital touchpoints. We rebuilt their design system from the ground up, utilizing modern typography and a vibrant color palette, and implemented a high-performance Next.js marketing site.
          </p>
        </div>

        <div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl sticky top-32">
            <h3 className="text-white font-bold mb-6 border-b border-white/10 pb-4">The Results</h3>
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-extrabold text-brand-accent mb-1">+300%</p>
                <p className="text-foreground-muted text-sm uppercase tracking-wider">User Engagement</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-brand-accent mb-1">2.4x</p>
                <p className="text-foreground-muted text-sm uppercase tracking-wider">Conversion Rate</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-brand-accent mb-1">&lt;1s</p>
                <p className="text-foreground-muted text-sm uppercase tracking-wider">Page Load Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
