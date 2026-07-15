export const metadata = {
  title: "Testimonials | BrandEx Media",
  description: "Read what our clients have to say about working with us.",
};

export default function TestimonialsPage() {
  const testimonials = [
    { quote: "BrandEx completely transformed our digital presence. Our engagement is up 300%.", author: "Sarah Jenkins", role: "CEO, TechFlow" },
    { quote: "The most creative and responsive agency we've ever partnered with.", author: "Michael Chang", role: "CMO, NovaBrand" },
    { quote: "They didn't just build a website, they built a scalable growth engine for our startup.", author: "Elena Rodriguez", role: "Founder, Elevate" },
  ];

  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-20 min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Client <span className="text-brand-accent">Love.</span>
        </h1>
        <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
          Don't just take our word for it. Here is what our partners have to say.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between">
            <div className="mb-8 text-brand-accent">
              {/* SVG Quote Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11C14 8.23858 16.2386 6 19 6C21.7614 6 24 8.23858 24 11C24 15.4183 20.4183 19 16 19V17C18.2091 17 20 15.2091 20 13V12C20 11.4477 19.5523 11 19 11H14V11ZM2 11C2 8.23858 4.23858 6 7 6C9.76142 6 12 8.23858 12 11C12 15.4183 8.41828 19 4 19V17C6.20914 17 8 15.2091 8 13V12C8 11.4477 7.55228 11 7 11H2V11Z" />
              </svg>
            </div>
            <p className="text-white text-xl leading-relaxed font-light mb-8 italic flex-grow">
              "{t.quote}"
            </p>
            <div>
              <p className="text-brand-accent font-bold">{t.author}</p>
              <p className="text-foreground-muted text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
