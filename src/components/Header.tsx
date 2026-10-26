"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock/unlock body scroll when mobile menu opens/closes
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { name: "Work", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Insights", path: "/insights" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed left-1/2 top-3 z-50 flex w-[calc(100%-1.5rem)] max-w-[1440px] -translate-x-1/2 items-center justify-between rounded-full border px-4 transition-all duration-300 md:px-5 ${scrolled
          ? "border-white/12 bg-background-outer/88 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-2xl"
          : "border-white/10 bg-background-outer/45 py-3 backdrop-blur-xl"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* BrandEx Logo */}
        <Link href="/" title="BrandEx Media Home" className="flex items-center gap-3 group cursor-pointer">
          <div className="flex flex-col items-start relative">
            <div className="relative w-24 h-8 md:w-32 md:h-9 flex items-center">
              <Image
                src="/IMG_6459.PNG"
                alt="BrandEx Media"
                fill
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 112px, 144px"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 rounded-full px-6 py-2"
          aria-label="Primary navigation"
        >
          {navLinks.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-[11px] uppercase tracking-[.16em] font-semibold transition-colors py-1 ${isActive ? "text-brand-accent font-bold" : "text-white/60 hover:text-white"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-brand-accent rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex min-h-10 items-center gap-2.5 overflow-hidden rounded-full bg-brand-accent px-5 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-background-outer transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(196,232,109,0.3)] active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          suppressHydrationWarning
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative z-50 p-2.5 text-white hover:text-brand-accent active:scale-90 transition-all rounded-full bg-white/5 border border-white/10 min-w-[42px] min-h-[42px] flex items-center justify-center"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="w-6 h-6 text-brand-accent" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Thin Scroll Progress Bar directly under the Header */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-white/[0.04] overflow-hidden pointer-events-none">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-mid via-brand-accent to-[#d8ff76] origin-left shadow-[0_0_8px_rgba(196,232,109,0.8)]"
            style={{ scaleX }}
          />
        </div>
      </motion.header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 bg-background-outer/96 backdrop-blur-2xl flex flex-col justify-between px-5 pt-24 pb-28 lg:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
                // Navigation Directory
              </span>
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((item, i) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                    >
                      <Link
                        href={item.path}
                        className={`flex items-center justify-between text-3xl sm:text-4xl font-oswald uppercase tracking-tight transition-colors py-3 border-b border-white/10 min-h-[60px] ${isActive ? "text-brand-accent font-bold" : "text-white/80 hover:text-white"
                          }`}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight className={`w-6 h-6 flex-shrink-0 ${isActive ? "text-brand-accent" : "text-white/30"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full py-4 rounded-2xl bg-brand-accent text-background-outer font-oswald text-base uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(196,232,109,0.3)] min-h-[56px]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex flex-wrap justify-between items-center gap-2 text-xs text-white/50 font-mono">
                <span className="break-all">teambrandexmedia@gmail.com</span>
                <span>IND | USA</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
