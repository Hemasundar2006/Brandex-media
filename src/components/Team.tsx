"use client";

import { motion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export default function Team() {
  const team = [
    {
      name: "Pradeep Lenka",
      role: "Founder & Director",
      bio: "Fusing deep strategic marketing expertise with visual production to build brands that form deep audience connections.",
      image: "/Screenshot 2026-07-09 011106.png"
    },
    {
      name: "Mahesh Arjilli",
      role: "Founder & Director",
      bio: "Cinematic filmmaker translating complex concepts into memorable, authentic visual narratives.",
      image: "/Screenshot 2026-07-09 011158.png"
    }
  ];

  return (
    <section className="w-full py-24 bg-background-center relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the <span className="text-brand-accent">Founders</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            The visionary minds driving BrandEx Media forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:border-brand-accent/30 transition-colors flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left group"
            >
              {/* Image */}
              <div className="w-40 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="flex flex-col justify-center h-full pt-2">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className={`text-brand-accent text-2xl mb-4 ${caveat.className}`}>
                  {member.role}
                </p>
                <p className="text-foreground-muted leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
