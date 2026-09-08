"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const pct = Math.round(latest * 100);
      setScrollPercent(pct);
      setIsVisible(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Circular Scroll Progress & Back-to-Top Indicator */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          title="Scroll to top"
          aria-label="Scroll back to top"
          className="fixed bottom-8 left-8 z-40 group flex items-center gap-2.5 px-3 py-2 rounded-full glass-panel border border-white/15 bg-background-outer/90 backdrop-blur-xl shadow-2xl hover:border-brand-accent/50 hover:bg-background-outer transition-all duration-300 cursor-pointer"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              {/* Background Track */}
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="3.5"
              />
              {/* Progress Stroke */}
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#C4E86D"
                strokeWidth="3.5"
                strokeDasharray="88"
                strokeDashoffset={88 - (88 * scrollPercent) / 100}
                strokeLinecap="round"
                className="transition-all duration-100 ease-out"
              />
            </svg>
            <ArrowUp className="w-3 h-3 text-brand-accent absolute group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
          <span className="font-mono text-[11px] font-bold text-white/90 group-hover:text-brand-accent transition-colors pr-1">
            {scrollPercent}%
          </span>
        </motion.button>
      )}
    </>
  );
}
