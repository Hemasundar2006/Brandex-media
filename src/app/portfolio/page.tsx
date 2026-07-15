import Link from "next/link";

export const metadata = {
  title: "Portfolio | BrandEx Media",
  description: "View our recent case studies and client projects.",
};

export default function PortfolioPage() {
  const projects = [
    { title: "Premium Poster Making", slug: "premium-posters", client: "Visuals that stop the scroll and demand attention.", image: "/Screenshot 2026-07-15 223705.png" },
    { title: "Product Shoot", slug: "product-shoot", client: "Showcase your offerings with stunning clarity and precision.", image: "/Screenshot 2026-07-15 223711.png" },
    { title: "Professional Reel Making", slug: "professional-reels", client: "Cinematic short-form content built for viral growth.", image: "/Screenshot 2026-07-15 223720.png" },
    { title: "Model Shoots", slug: "model-shoots", client: "Bringing your brand's lifestyle and aesthetic to life.", image: "/Screenshot 2026-07-15 223727.png" },
  ];

  return (
    <main className="w-full flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-32 w-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Our <span className="text-brand-accent">Work.</span>
        </h1>
        <p className="text-foreground-muted text-lg max-w-2xl mb-16">
          Case studies and results from our most successful campaigns.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj) => (
            <Link href={`/portfolio/${proj.slug}`} key={proj.slug}>
              <div className="group cursor-pointer">
                <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl mb-4 group-hover:border-brand-accent/50 transition-colors flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">{proj.title}</h2>
                <p className="text-foreground-muted text-sm mt-1">Client: {proj.client}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
