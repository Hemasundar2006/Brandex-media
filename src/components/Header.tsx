"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
          scrolled ? "bg-background-outer/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      >
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          {/* Logo - user should place the provided white logo at /logo-white.png in the public folder */}
          <div className="relative w-32 h-10 flex items-center">
            <Image 
              src="/IMG_6459.PNG" 
              alt="BrandEx Media" 
              fill
              className="object-contain opacity-100 transition-opacity z-10" 
            />
          </div>
          <motion.div
            className="text-white group-hover:text-brand-accent ml-2"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </Link>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 p-2 text-white hover:text-brand-accent transition-colors"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background-outer/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-4xl md:text-6xl font-light text-white/70 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: i * 0.1 }}
                    className="inline-block"
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </nav>
            
            <motion.div 
              className="absolute bottom-12 flex gap-8 text-white/50 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">FAQ</Link>
              <Link href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Careers</Link>
              <Link href="/testimonials" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Testimonials</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
