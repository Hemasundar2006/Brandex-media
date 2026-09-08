"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, Mail, Calendar, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";

export default function QuickContactDock() {
  const [isOpen, setIsOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const contactOptions = [
    {
      title: "Chat on WhatsApp",
      subtitle: "+91 9010205771 (Instant Response)",
      href: "https://wa.me/919010205771?text=Hi%20BrandEx%20Media,%20I'd%20like%20to%20discuss%20a%20new%20creative%20project.",
      isExternal: true,
      icon: <MessageSquare className="w-5 h-5 text-brand-accent" />,
    },
    {
      title: "Direct Phone Call",
      subtitle: "+91 9494835771 / +91 7995138462",
      href: "tel:+919494835771",
      isExternal: true,
      icon: <Phone className="w-5 h-5 text-brand-accent" />,
    },
    {
      title: "Email Agency Desk",
      subtitle: "teambrandexmedia@gmail.com",
      href: "mailto:teambrandexmedia@gmail.com",
      isExternal: true,
      icon: <Mail className="w-5 h-5 text-brand-accent" />,
    },
    {
      title: "Structured Project Planner",
      subtitle: "Share budget, scope & timeline",
      href: "/contact",
      isExternal: false,
      icon: <Calendar className="w-5 h-5 text-brand-accent" />,
    },
  ];

  return (
    <div ref={dockRef} className="fixed bottom-8 right-8 z-40 hidden md:block">
      {/* Popout Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-84 bg-background-outer/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(196,232,109,0.15)] mb-3 overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div>
                <p className="font-oswald text-sm font-bold uppercase tracking-wider text-brand-accent">
                  Connect With BrandEx
                </p>
                <p className="text-[12px] text-white/60">Typical reply time: Under 15 mins</p>
              </div>
              <button
                suppressHydrationWarning
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close Contact Dock"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {contactOptions.map((opt, i) =>
                opt.isExternal ? (
                  <a
                    key={i}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-brand-accent/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                      {opt.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white group-hover:text-brand-accent transition-colors truncate">
                        {opt.title}
                      </p>
                      <p className="text-[11px] text-white/50 truncate">{opt.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ) : (
                  <Link
                    key={i}
                    href={opt.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-brand-accent/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                      {opt.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white group-hover:text-brand-accent transition-colors truncate">
                        {opt.title}
                      </p>
                      <p className="text-[11px] text-white/50 truncate">{opt.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 px-5 py-3.5 bg-brand-accent text-background-outer font-oswald text-sm font-bold uppercase tracking-wider rounded-full shadow-[0_10px_35px_rgba(196,232,109,0.35)] border border-brand-accent hover:bg-white transition-all cursor-pointer"
        aria-label="Toggle Quick Contact Menu"
      >
        <span className="w-2 h-2 rounded-full bg-background-center animate-pulse" />
        <span>Let&apos;s Talk</span>
        <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
      </motion.button>
    </div>
  );
}
