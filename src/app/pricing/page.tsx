"use client";

import { Check, Star, Megaphone, TrendingUp, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const plans = [
    { 
      name: "Standard", 
      price: "₹25,000", 
      features: ["6 Targeted Reels", "12 Custom Posters", "Full Account Management", "Meta Ad Execution", "3 Motion Posters", "1 Dedicated Ad"],
      popular: false
    },
    { 
      name: "Professional", 
      price: "₹45,000", 
      features: ["10 Tailored Reels", "20 Custom Posters", "Meta Ad Running", "Advanced SEO Integration", "5 Dynamic Motion Posters", "Daily Profile Engagement"],
      popular: true
    },
    { 
      name: "Premium", 
      price: "₹80,000", 
      features: ["Dedicated Media Manager", "Comprehensive Website Development", "13 Premium Reels", "Unlimited Posters", "Full Meta & Google Ads Campaigns", "High-Tier Creative Ads"],
      popular: false
    },
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-20 min-h-[80vh] relative overflow-hidden">
      
      {/* Floating Digital Marketing Elements */}
      <motion.div className="absolute top-20 left-10 text-brand-accent/20" animate={{ y: [0, -20, 0], rotate: 10 }} transition={{ duration: 4, repeat: Infinity }}><Megaphone size={120} /></motion.div>
      <motion.div className="absolute top-40 right-10 text-brand-accent/20" animate={{ y: [0, 20, 0], rotate: -15 }} transition={{ duration: 5, repeat: Infinity }}><TrendingUp size={150} /></motion.div>
      <motion.div className="absolute bottom-20 left-1/4 text-brand-accent/10" animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity }}><Target size={180} /></motion.div>
      <motion.div className="absolute bottom-40 right-1/4 text-brand-accent/10" animate={{ y: [0, -30, 0] }} transition={{ duration: 7, repeat: Infinity }}><Rocket size={100} /></motion.div>

      <div className="text-center mb-16 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Growth <span className="text-brand-accent">Packages.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-foreground-muted text-lg max-w-2xl mx-auto"
        >
          Transparent pricing tailored to scale your brand's digital presence.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
        {plans.map((plan, index) => (
          <motion.div 
            key={plan.name} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className={`relative bg-black/40 backdrop-blur-xl border ${plan.popular ? 'border-brand-accent shadow-[0_0_30px_rgba(196,232,109,0.15)] transform scale-105 z-20' : 'border-white/10 hover:border-brand-accent/30'} p-8 rounded-3xl flex flex-col transition-colors`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-black font-bold px-4 py-1 rounded-full text-sm flex items-center gap-1">
                <Star className="w-4 h-4 fill-black" /> MOST POPULAR
              </div>
            )}
            
            <h3 className="text-2xl font-bold text-white mb-2 text-center mt-2">{plan.name}</h3>
            <div className="text-center mb-8 pb-8 border-b border-white/10">
              <p className="text-5xl font-extrabold text-white">{plan.price}</p>
              <p className="text-foreground-muted text-sm mt-2">/ month</p>
            </div>
            
            <ul className="space-y-5 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-foreground-muted flex items-start gap-3">
                  <div className={`mt-1 rounded-full p-0.5 ${plan.popular ? 'bg-brand-accent/20 text-brand-accent' : 'bg-white/10 text-white'}`}>
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className={plan.popular ? 'text-white font-medium' : ''}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand-accent text-black hover:bg-brand-accent/90 hover:scale-[1.02]' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
              Choose {plan.name}
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
