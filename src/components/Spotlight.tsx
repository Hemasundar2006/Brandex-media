"use client";

import { motion, Variants } from "framer-motion";

export default function Spotlight() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1, 
        ease: "easeOut",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      id="spotlight" 
      className="relative w-full py-40 md:py-64 flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background radial glowing pulse */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className="w-[600px] h-[600px] rounded-full bg-brand-mid blur-[120px]" />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] flex flex-col items-center">
          <motion.span variants={itemVariants} className="text-white">The Best</motion.span>
          <motion.span variants={itemVariants} className="text-brand-accent mt-4 md:mt-8 block">
            Content Creator
          </motion.span>
          <motion.span variants={itemVariants} className="text-white block mt-2">Award</motion.span>
        </h2>
        
        <motion.p
          className="mt-12 md:mt-24 text-lg md:text-2xl text-foreground-muted max-w-2xl mx-auto font-light"
          variants={itemVariants}
        >
          Recognized for redefining digital experiences through bold, narrative-driven design.
        </motion.p>
      </motion.div>
    </section>
  );
}
