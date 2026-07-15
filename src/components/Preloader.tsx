"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the preloader after 1.2s to give enough time for the animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background-outer"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      <motion.div
        className="flex items-center justify-center gap-1 text-white text-5xl font-bold tracking-tight relative w-64 h-20"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img 
          src="/IMG_6459.PNG" 
          alt="BrandEx Media" 
          className="absolute inset-0 w-full h-full object-contain opacity-100 z-10" 
        />
      </motion.div>
    </motion.div>
  );
}
