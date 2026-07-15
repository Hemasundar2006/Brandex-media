"use client";

import { motion, Variants } from "framer-motion";
import { User } from "lucide-react";

export default function Steps() {
  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const nodeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        type: "spring", 
        stiffness: 200,
        delay: custom * 0.5 // Stagger based on custom index
      }
    })
  };

  return (
    <section className="w-full py-12 md:py-24 flex justify-center px-6 overflow-hidden">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            The Journey to <br/>
            <span className="text-brand-accent">Success</span>
          </motion.h3>
          <motion.p
            className="text-foreground-muted text-lg font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We take your brand step by step to the pinnacle of digital excellence. 
            Every stage is carefully calculated to maximize impact and ROI.
          </motion.p>
        </div>

        {/* The Steps Graphic */}
        <div className="md:w-1/2 flex justify-center relative w-full max-w-sm mx-auto md:max-w-none pb-12">
          <motion.svg
            viewBox="0 0 300 400"
            fill="none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full max-w-[250px] md:max-w-[300px] h-auto overflow-visible"
          >
            {/* The Climbing Path */}
            <motion.path
              d="M 50 350 L 50 250 L 150 250 L 150 150 L 250 150 L 250 50 L 280 80 M 250 50 L 220 80"
              stroke="#1B7A4D"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={lineVariants}
            />

            {/* Node 1 */}
            <motion.circle cx="50" cy="350" r="8" fill="#C4E86D" variants={nodeVariants} custom={0} />
            <motion.text x="70" y="340" fill="white" fontSize="14" fontWeight="bold" variants={nodeVariants} custom={0}>1. Brand Audit</motion.text>
            <motion.text x="70" y="358" fill="#A3A3A3" fontSize="11" variants={nodeVariants} custom={0}>Deep dive into</motion.text>
            <motion.text x="70" y="372" fill="#A3A3A3" fontSize="11" variants={nodeVariants} custom={0}>BrandEx strategy</motion.text>

            {/* Node 2 - Positioned bottom-right to avoid the line */}
            <motion.circle cx="150" cy="250" r="8" fill="#C4E86D" variants={nodeVariants} custom={1} />
            <motion.text x="165" y="265" fill="white" fontSize="14" fontWeight="bold" variants={nodeVariants} custom={1}>2. Execution</motion.text>
            <motion.text x="165" y="283" fill="#A3A3A3" fontSize="11" variants={nodeVariants} custom={1}>Targeted reels &</motion.text>
            <motion.text x="165" y="297" fill="#A3A3A3" fontSize="11" variants={nodeVariants} custom={1}>custom posters</motion.text>

            {/* Node 3 - Positioned top-left to avoid the line */}
            <motion.circle cx="250" cy="150" r="8" fill="#C4E86D" variants={nodeVariants} custom={2} />
            <motion.text x="235" y="110" fill="white" fontSize="14" fontWeight="bold" textAnchor="end" variants={nodeVariants} custom={2}>3. Scaling</motion.text>
            <motion.text x="235" y="128" fill="#A3A3A3" fontSize="11" textAnchor="end" variants={nodeVariants} custom={2}>Total market</motion.text>
            <motion.text x="235" y="142" fill="#A3A3A3" fontSize="11" textAnchor="end" variants={nodeVariants} custom={2}>dominance</motion.text>
          </motion.svg>

          {/* Floating Person/Icon Element */}
          <motion.div
            className="absolute top-4 right-12 bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 text-brand-accent shadow-[0_0_30px_rgba(196,232,109,0.2)]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <User className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
