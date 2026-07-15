export const metadata = {
  title: "FAQ | BrandEx Media",
  description: "Frequently asked questions about our process, pricing, and timelines.",
};

export default function FAQPage() {
  const faqs = [
    { q: "How long does a typical project take?", a: "Most branding projects take 4-6 weeks, while full web development can take 8-12 weeks depending on complexity." },
    { q: "Do you offer ongoing support?", a: "Yes, we offer monthly retainer packages for social media, SEO, and website maintenance." },
    { q: "What is your pricing model?", a: "We offer both fixed-price packages and custom quotes based on your specific requirements." },
    { q: "Do you work with international clients?", a: "Absolutely. We have clients all over the world and are used to collaborating across time zones." },
  ];

  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-20 min-h-[80vh]">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center">
        Questions? <span className="text-brand-accent block">We have answers.</span>
      </h1>
      
      <div className="mt-16 space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
              <span className="text-brand-accent">Q:</span> {faq.q}
            </h3>
            <p className="text-foreground-muted pl-7">
              <span className="text-brand-accent/50 font-bold hidden md:inline absolute -ml-7">A:</span> {faq.a}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
