"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Send, Loader2, Check } from "lucide-react";

export default function Footer() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate network request
    setTimeout(() => {
      setFormState("success");
      // Reset form state after success
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }, 1500);
  };

  const formVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <footer className="w-full border-t border-white/5 py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-brand-mid shadow-[0_0_100px_30px_rgba(27,122,77,0.3)]" />
      
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your <span className="text-brand-accent block">Brand.</span>
          </motion.h2>
          <motion.p 
            className="text-foreground-muted text-lg font-light"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to push boundaries? Let's build something extraordinary together. Drop us a message to start the conversation.
          </motion.p>
        </div>

        {/* Right form */}
        <motion.div 
          className="md:w-1/2"
          variants={formVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} suppressHydrationWarning>
            <motion.div variants={fieldVariants} className="relative group">
              <label htmlFor="name" className={`absolute left-4 transition-all duration-300 z-10 ${focusedField === 'name' || formState !== 'idle' ? '-top-3 text-xs text-brand-accent px-1' : 'top-4 text-white/50'}`}>
                {focusedField === 'name' && <span className="absolute inset-0 bg-background-outer -z-10 blur-sm" />}
                Name
              </label>
              <input 
                type="text" 
                id="name"
                suppressHydrationWarning
                disabled={formState !== "idle"}
                className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white outline-none transition-all duration-300 relative z-0 ${focusedField === 'name' ? 'border-brand-accent shadow-[0_0_15px_rgba(196,232,109,0.3)]' : 'border-brand-border/30 hover:border-brand-border'}`}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="relative group">
              <label htmlFor="email" className={`absolute left-4 transition-all duration-300 z-10 ${focusedField === 'email' || formState !== 'idle' ? '-top-3 text-xs text-brand-accent px-1' : 'top-4 text-white/50'}`}>
                {focusedField === 'email' && <span className="absolute inset-0 bg-background-outer -z-10 blur-sm" />}
                Email
              </label>
              <input 
                type="email" 
                id="email"
                suppressHydrationWarning
                disabled={formState !== "idle"}
                className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white outline-none transition-all duration-300 relative z-0 ${focusedField === 'email' ? 'border-brand-accent shadow-[0_0_15px_rgba(196,232,109,0.3)]' : 'border-brand-border/30 hover:border-brand-border'}`}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="relative group">
              <label htmlFor="message" className={`absolute left-4 transition-all duration-300 z-10 ${focusedField === 'message' || formState !== 'idle' ? '-top-3 text-xs text-brand-accent px-1' : 'top-4 text-white/50'}`}>
                {focusedField === 'message' && <span className="absolute inset-0 bg-background-outer -z-10 blur-sm" />}
                Message / Budget
              </label>
              <textarea 
                id="message"
                rows={4}
                suppressHydrationWarning
                disabled={formState !== "idle"}
                className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white outline-none transition-all duration-300 resize-none relative z-0 ${focusedField === 'message' ? 'border-brand-accent shadow-[0_0_15px_rgba(196,232,109,0.3)]' : 'border-brand-border/30 hover:border-brand-border'}`}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
              />
            </motion.div>

            <motion.button
              type="submit"
              suppressHydrationWarning
              disabled={formState !== "idle"}
              className="group relative w-full bg-brand-mid hover:bg-brand-mid/90 text-white font-bold py-5 rounded-xl overflow-hidden flex items-center justify-center gap-3 transition-colors disabled:cursor-not-allowed"
              variants={fieldVariants}
              whileHover={formState === "idle" ? { scale: 1.02 } : {}}
              whileTap={formState === "idle" ? { scale: 0.98 } : {}}
            >
              <AnimatePresence mode="wait">
                {formState === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 relative z-10"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                )}
                {formState === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="relative z-10"
                  >
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </motion.div>
                )}
                {formState === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-2 relative z-10"
                  >
                    <span>Sent Successfully</span>
                    <Check className="w-5 h-5 text-brand-accent" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Hover glow effect */}
              {formState === "idle" && (
                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto mt-24 pt-8 border-t border-brand-border/20 text-center flex flex-col md:flex-row justify-between items-center text-foreground-muted text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>© 2026 BrandEx Media. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </motion.div>
    </footer>
  );
}
