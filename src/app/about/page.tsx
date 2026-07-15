import Team from "@/components/Team";

export const metadata = {
  title: "About Us | BrandEx Media",
  description: "Learn more about our brand story, mission, team, and values.",
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          About <span className="text-brand-accent">Us.</span>
        </h1>
        
        <section className="mt-12 mb-20">
          <div className="max-w-4xl border-l-4 border-brand-accent pl-6 md:pl-10">
            <p className="text-foreground-muted text-xl md:text-2xl leading-relaxed">
              At Brandex Media, we bring <span className="text-brand-accent font-semibold">3 years of marketing experience</span>, 
              helping brands grow through <span className="text-white font-medium">creative strategy</span> and <span className="text-brand-accent font-semibold">measurable results</span>. 
              We have worked with happy clients across different places and industries, 
              while also <span className="text-brand-accent font-semibold">managing influencer accounts</span> and creating <span className="text-white font-medium">premium content</span> using 
              high-quality professional equipment to deliver strong and <span className="text-brand-accent font-semibold">lasting brand impact</span>.
            </p>
          </div>
        </section>
      </div>

      {/* Render the full Team component we just built */}
      <Team />
    </main>
  );
}
