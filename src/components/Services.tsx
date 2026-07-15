"use client";

import { motion } from "framer-motion";
import { Clapperboard, TrendingUp, MonitorSmartphone, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Production Expertise",
      icon: <Clapperboard className="w-6 h-6 text-brand-accent" />,
      features: [
        "Model & Brand Shoots",
        "Reel Making",
        "Animations & Motion Design"
      ]
    },
    {
      title: "Creative Strategy",
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      features: [
        "Social Media Management",
        "Influencer Management",
        "Content Marketing"
      ]
    },
    {
      title: "Digital Systems",
      icon: <MonitorSmartphone className="w-6 h-6 text-brand-accent" />,
      features: [
        "Custom Website Development",
        "High-Converting Brand Creatives",
        "Graphic Design (Bonus)"
      ]
    }
  ];

  return (
    <section className="w-full py-24 bg-background-outer relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-brand-accent">Services</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Everything you need to scale your brand under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-accent/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">
                {service.title}
              </h3>
              
              <ul className="space-y-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
