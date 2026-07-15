import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the service data from a CMS based on the slug
  return {
    title: `${params.slug.replace(/-/g, ' ').toUpperCase()} | Services | BrandEx Media`,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-20 min-h-[80vh]">
      <Link href="/services" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back to Services
      </Link>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
        {serviceName}
      </h1>
      
      <div className="prose prose-invert prose-lg text-foreground-muted">
        <p className="text-xl text-white/80 leading-relaxed mb-12">
          This is a dynamic page for the <strong>{serviceName}</strong> service. In a full implementation, this content would be fetched from a headless CMS (like Sanity, Contentful, or Strapi) based on the slug: <code>{params.slug}</code>.
        </p>
        
        <h2 className="text-2xl text-white font-semibold mb-4">What's included</h2>
        <ul className="list-disc list-inside space-y-2 mb-12">
          <li>Comprehensive strategy and planning</li>
          <li>Custom execution tailored to your brand</li>
          <li>Monthly analytics and reporting</li>
          <li>Dedicated account manager</li>
        </ul>
      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center mt-12">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to scale your {serviceName}?</h3>
        <Link href="/contact" className="inline-block px-8 py-4 bg-brand-mid hover:bg-brand-mid/80 text-white font-bold rounded-xl transition-colors">
          Get a Custom Quote
        </Link>
      </div>
    </main>
  );
}
