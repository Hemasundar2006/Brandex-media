import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import Services from "@/components/Services";
import Work from "@/components/Work";
import TrustedBy from "@/components/TrustedBy";
import WhyBrandEx from "@/components/WhyBrandEx";
import Steps from "@/components/Steps";
import SocialFeed from "@/components/SocialFeed";
import Team from "@/components/Team";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsPreview from "@/components/InsightsPreview";
import ContactForm from "@/components/ContactForm";
import { Sparkles, MapPin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Preloader />
      
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Brand Statement & Real Metrics */}
      <IntroStatement />

      {/* 3. Interactive Services Rows */}
      <Services />

      {/* 4. Selected Work & Asymmetric Case Studies */}
      <Work />

      {/* 5. Client Trust Bar */}
      <TrustedBy />

      {/* 6. Why BrandEx (4 Selling Pillars) */}
      <WhyBrandEx />

      {/* 7. Brand Journey Timeline */}
      <Steps />

      {/* 8. Instagram & BTS Feed */}
      <SocialFeed />

      {/* 9. Founders & Creative Directors */}
      <Team />

      {/* 10. Client Testimonials Slider */}
      <TestimonialsSection />

      {/* 11. Insights & Thought Leadership */}
      <InsightsPreview />

      {/* 12. Structured Enquiry & Conversion Section */}
      <section className="w-full py-28 md:py-40 bg-background-outer relative overflow-hidden border-t border-white/5" id="contact">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-mid/15 blur-[160px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1.5px] bg-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
                  // Start a Project
                </span>
              </div>
              <h2 className="font-oswald text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.95]">
                HAVE A PROJECT <span className="text-brand-accent block">IN MIND?</span>
              </h2>
              <p className="text-foreground-muted text-lg md:text-xl font-light leading-relaxed mb-10">
                &ldquo;Let&apos;s turn your next idea into something people remember.&rdquo;
              </p>

              <div className="space-y-6 pt-6 border-t border-white/10 text-sm text-foreground-muted">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Visakhapatnam Studio</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-mono">
                      43-20-31/49-20-31, Beside Bata Showroom, TSN Colony, Hotel Sinka Grand, Dondaparthi, Visakhapatnam – 530016
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-0.5">Direct Lines</h4>
                    <p className="text-xs text-white/60 font-mono">+91 9494835771 / +91 7995138462</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-0.5">Agency Desk</h4>
                    <p className="text-xs text-white/60 font-mono">hello@brandexmedia.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Step Interactive Form */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-white/15 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
