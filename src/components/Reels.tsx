"use client";

import { motion } from "framer-motion";

export default function Reels() {
  const reels = [
    "https://www.instagram.com/reel/DZbxFNKxxV-/embed/?hidecaption=true&autoplay=1",
    "https://www.instagram.com/reel/DaKAxgXPMKu/embed/?hidecaption=true&autoplay=1"
  ];

  return (
    <section className="w-full py-24 bg-background-outer relative border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-brand-accent">Reels</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            High-converting short-form content that dominates social algorithms.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {reels.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative w-full max-w-[340px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 hover:border-brand-accent/50 transition-colors bg-white"
            >
              <iframe
                src={url}
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; encrypted-media"
                className="w-full bg-white"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
