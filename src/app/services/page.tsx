import Link from "next/link";

export const metadata = {
  title: "Services | BrandEx Media",
  description: "Explore our comprehensive suite of creative and digital marketing services.",
};

export default function ServicesPage() {
  const services = [
    { title: "Social Media Marketing", slug: "social-media-marketing", desc: "Build your audience and drive engagement." },
    { title: "Brand Identity", slug: "brand-identity", desc: "Logos, guidelines, and visual language." },
    { title: "Web Development", slug: "web-development", desc: "High-performance websites and web apps." },
    { title: "Content Creation", slug: "content-creation", desc: "Video, photography, and copywriting." },
  ];

  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-20 min-h-[80vh]">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
        Our <span className="text-brand-accent">Services.</span>
      </h1>
      <p className="text-foreground-muted text-lg max-w-2xl mb-16">
        An overview of everything we offer to help your business scale. Click on a service to learn more.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((svc) => (
          <Link href={`/services/${svc.slug}`} key={svc.slug}>
            <div className="bg-white/5 border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 transition-all p-8 rounded-2xl cursor-pointer group">
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{svc.title}</h2>
              <p className="text-foreground-muted">{svc.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
