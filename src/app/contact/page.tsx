import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Globe2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Start a Project | BrandEx Media",
  description:
    "Get in touch with BrandEx Media. Headquartered in Visakhapatnam, serving brands across India and the United States. Start a project, request a proposal, or chat on WhatsApp.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Header */}
      <section className="relative w-full py-20 md:py-32 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-mid/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              // Direct Agency Inquiries
            </span>
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6">
            LET&apos;S TALK <span className="text-brand-accent">GROWTH.</span>
          </h1>

          <p className="text-foreground-muted text-lg md:text-2xl font-light max-w-3xl leading-relaxed">
            Have a project in mind, an upcoming product shoot, or need full social media management? Share your brief below or connect directly with our directors.
          </p>
        </div>
      </section>

      {/* Main Grid: Details on Left, Form on Right */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Studio Presence */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h2 className="font-oswald text-2xl font-bold uppercase text-white pb-4 border-b border-white/10">
                Direct Contact Channels
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase font-mono">Telephone</h3>
                  <p className="text-sm text-foreground-muted font-mono mt-0.5">
                    +91 9494835771 <br />
                    +91 7995138462
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase font-mono">WhatsApp Desk</h3>
                  <a
                    href="https://wa.me/919010205771"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-accent hover:underline font-mono mt-0.5 inline-block"
                  >
                    +91 9010205771 (Quick Response)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase font-mono">Email</h3>
                  <a
                    href="mailto:hello@brandexmedia.com"
                    className="text-sm text-brand-accent hover:underline font-mono mt-0.5 inline-block"
                  >
                    hello@brandexmedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase font-mono">Office Hours</h3>
                  <p className="text-sm text-foreground-muted font-mono mt-0.5">
                    Monday — Saturday: 9:00 AM — 8:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Address Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase font-oswald tracking-wide">
                    Visakhapatnam Headquarters
                  </h3>
                  <span className="text-xs text-brand-accent font-mono">IND | USA Global Operations</span>
                </div>
              </div>

              <p className="text-sm text-white/70 font-mono leading-relaxed pl-15">
                43-20-31/49-20-31, Beside the Bata Showroom in TSN Colony, <br />
                Ground Floor, Hotel Sinka Grand, <br />
                Dondaparthi, Visakhapatnam, <br />
                Andhra Pradesh – 530016
              </p>
            </div>
          </div>

          {/* Right Column: Structured Project Enquiry Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-white/15 shadow-2xl">
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-white mb-2">
              Project Briefing Planner
            </h2>
            <p className="text-foreground-muted text-sm font-light mb-8">
              Fill in your requirements below. Our directors review every submission directly and respond within hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
