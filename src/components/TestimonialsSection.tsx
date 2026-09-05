"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "BrandEx Media completely transformed our brand trajectory. Their high-end production quality, paired with relentless social media execution, surged our audience engagement by over 300%.",
      author: "Sarah Jenkins",
      role: "Chief Executive Officer",
      company: "TechFlow Dynamics",
      rating: 5,
    },
    {
      quote:
        "By far the most agile, creative, and strategically sharp creative agency we have partnered with. From studio product shoots to viral reels, their attention to detail is world-class.",
      author: "Michael Chang",
      role: "Chief Marketing Officer",
      company: "NovaBrand Global",
      rating: 5,
    },
    {
      quote:
        "They didn't just build our online presence—they engineered a scalable digital growth machine. The team's creative intuition and technical execution are second to none.",
      author: "Elena Rodriguez",
      role: "Founder & Creative Director",
      company: "Elevate Apparel",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-28 md:py-40 bg-background-outer relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-brand-mid/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-semibold">
                // Client Endorsements
              </span>
            </div>
            <h2 className="font-oswald text-5xl sm:text-7xl font-bold text-white uppercase tracking-tight">
              WHAT OUR <span className="text-brand-accent">CLIENTS SAY</span>
            </h2>
          </div>
          {/* Slider Arrows */}
          <div className="flex items-center gap-3">
            <button
              suppressHydrationWarning
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-brand-accent hover:text-background-outer hover:border-brand-accent text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              suppressHydrationWarning
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-brand-accent hover:text-background-outer hover:border-brand-accent text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Display */}
        <div className="relative glass-panel p-8 sm:p-14 md:p-18 rounded-[2.5rem] border border-white/15 shadow-2xl min-h-[340px] flex flex-col justify-between">
          <Quote className="w-16 h-16 text-brand-accent/20 absolute top-8 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6 text-brand-accent">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent" />
                ))}
              </div>

              {/* Quote Body */}
              <blockquote className="font-oswald text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-snug tracking-tight mb-8">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-oswald text-xl font-bold uppercase text-brand-accent">
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-sm text-white/60 font-mono">
                    {testimonials[currentIndex].role} — {testimonials[currentIndex].company}
                  </p>
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, dotIdx) => (
              <button
                suppressHydrationWarning
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx ? "w-8 bg-brand-accent" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
