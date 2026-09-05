"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const exploreLinks = [
    { name: "Work & Case Studies", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Creator Network", href: "/influencers" },
    { name: "Insights & Articles", href: "/insights" },
    { name: "Growth Packages", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Careers", href: "/careers" },
  ];

  const serviceLinks = [
    { name: "Content Creation", href: "/services/content-creation" },
    { name: "Social Media Marketing", href: "/services/social-media-management" },
    { name: "Branding & Identity", href: "/services/branding-and-identity" },
    { name: "Commercial Production", href: "/services/video-production" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Web Development", href: "/services/web-development" },
  ];

  return (
    <footer className="w-full bg-background-outer border-t border-white/10 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50 shadow-[0_0_80px_20px_rgba(196,232,109,0.25)]" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <div className="relative w-40 h-11">
                  <Image
                    src="/IMG_6459.PNG"
                    alt="BrandEx Media"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="font-oswald text-2xl md:text-3xl font-bold uppercase text-white tracking-tight mb-4 max-w-sm leading-tight">
                Creative ideas. Digital experiences. Real growth.
              </p>
              <p className="text-sm text-foreground-muted font-light leading-relaxed max-w-md mb-8">
                BrandEx Media is a modern creative agency and production studio based in IND &amp; USA. We build brands that demand attention.
              </p>
            </div>

            {/* Office & Contact Quick Details */}
            <div className="space-y-3 text-xs text-white/60 font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>TSN Colony, Hotel Sinka Grand, Dondaparthi, Visakhapatnam – 530016</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>+91 9494835771 / +91 7995138462</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>hello@brandexmedia.com</span>
              </div>
            </div>
          </div>

          {/* Explore Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-6">
              // Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-accent transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-6">
              // Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-accent transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-6">
              // Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/brandexmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-brand-accent transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/brandex-media"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-brand-accent transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/919010205771"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-brand-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href="mailto:hello@brandexmedia.com"
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-brand-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Direct Email</span>
              </a>
            </div>

            {/* Quick Action */}
            <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <p className="text-xs text-white/70 mb-3 font-light">Have an urgent campaign brief?</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors"
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
          <p>© 2026 BrandEx Media. All rights reserved. Registered Creative Agency.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
