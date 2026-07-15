"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Work() {
  const projects = [
    { 
      title: "Premium Poster Making", 
      tagline: "Visuals that stop the scroll and demand attention.", 
      image: "/Screenshot 2026-07-15 223705.png" 
    },
    { 
      title: "Product Shoot", 
      tagline: "Showcase your offerings with stunning clarity and precision.", 
      image: "/Screenshot 2026-07-15 223711.png" 
    },
    { 
      title: "Professional Reel Making", 
      tagline: "Cinematic short-form content built for viral growth.", 
      image: "/Screenshot 2026-07-15 223720.png" 
    },
    { 
      title: "Model Shoots", 
      tagline: "Bringing your brand's lifestyle and aesthetic to life.", 
      image: "/Screenshot 2026-07-15 223727.png" 
    },
  ];

  return (
    <section className="w-full py-24 bg-background-outer relative border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-brand-accent">Work</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Case studies and results from our most successful campaigns.
          </p>
        </div>

        {/* Swipeable Carousel Container */}
        <div className="flex overflow-x-auto gap-6 md:gap-10 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((proj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer flex flex-col flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] snap-center"
            >
              <div className="aspect-[4/5] md:aspect-[4/5] bg-white/5 border border-white/10 rounded-2xl mb-6 group-hover:border-brand-accent/50 transition-colors flex items-center justify-center overflow-hidden relative shadow-xl">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-outer/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <h3 
                className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-brand-accent transition-colors tracking-tight"
              >
                {proj.title}
              </h3>
              <p className="text-foreground-muted text-sm md:text-base mt-2 font-medium leading-relaxed">{proj.tagline}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/portfolio"
            className="inline-block px-8 py-4 bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-background-outer rounded-full font-semibold transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
