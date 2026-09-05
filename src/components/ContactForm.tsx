"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ArrowRight, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Content Creation"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("₹25,000 - ₹50,000");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Immediate (Under 2 weeks)");
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const servicesOptions = [
    "Content Creation",
    "Social Media",
    "Branding",
    "Production",
    "Influencer Marketing",
    "Digital Marketing",
    "Website",
    "Other",
  ];

  const budgetOptions = [
    "Under ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000+",
    "Custom / Enterprise",
  ];

  const timelineOptions = [
    "Immediate (Under 2 weeks)",
    "1 - 2 Months",
    "Quarterly Strategy",
    "Flexible",
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("Please complete your name, email, and phone number.");
      return;
    }

    setFormState("loading");

    // Format structured message for WhatsApp
    const summary =
      `*New BrandEx Project Enquiry*%0A%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Company:* ${encodeURIComponent(company || "N/A")}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Services Needed:* ${encodeURIComponent(selectedServices.join(", "))}%0A` +
      `*Budget Range:* ${encodeURIComponent(selectedBudget)}%0A` +
      `*Timeline:* ${encodeURIComponent(selectedTimeline)}%0A` +
      `*Project Description:* ${encodeURIComponent(description || "Let's discuss on call.")}`;

    setTimeout(() => {
      setFormState("success");
      const whatsappUrl = `https://wa.me/919010205771?text=${summary}`;
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {formState === "success" ? (
          <motion.div
            key="success-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-brand-accent/40 text-center flex flex-col items-center justify-center min-h-[460px]"
          >
            <div className="w-16 h-16 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-6 text-brand-accent">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-oswald text-3xl sm:text-4xl font-bold uppercase text-white mb-2">
              ENQUIRY TRANSMITTED!
            </h3>
            <p className="text-foreground-muted text-base max-w-md mb-8 font-light">
              Thank you, <span className="text-white font-semibold">{name}</span>. Your brief has been forwarded to our directors. We are opening WhatsApp for an immediate response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                suppressHydrationWarning
                onClick={() => setFormState("idle")}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-oswald text-xs uppercase tracking-widest font-bold transition-all border border-white/20"
              >
                Submit Another Brief
              </button>
              <a
                href="tel:+919494835771"
                className="px-6 py-3 rounded-full bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold transition-all hover:bg-white"
              >
                Call Office Directly
              </a>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} suppressHydrationWarning className="flex flex-col gap-8">
            {/* Step 1: Capabilities Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-brand-accent font-bold mb-3">
                1. What do you need help with? (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2.5">
                {servicesOptions.map((svc) => {
                  const isSelected = selectedServices.includes(svc);
                  return (
                    <button
                      suppressHydrationWarning
                      type="button"
                      key={svc}
                      onClick={() => toggleService(svc)}
                      className={`px-4 py-2.5 rounded-full text-xs font-oswald uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-brand-accent text-background-outer border border-brand-accent shadow-[0_0_15px_rgba(196,232,109,0.3)]"
                          : "bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-white/25"
                      }`}
                    >
                      {svc}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Contact Details */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-brand-accent font-bold mb-3">
                2. Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    suppressHydrationWarning
                    type="text"
                    placeholder="Company / Brand Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    suppressHydrationWarning
                    type="email"
                    required
                    placeholder="Work Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    suppressHydrationWarning
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Budget Range */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-brand-accent font-bold mb-3">
                3. Approximate Monthly / Project Budget
              </label>
              <div className="flex flex-wrap gap-2.5">
                {budgetOptions.map((b) => {
                  const isSelected = selectedBudget === b;
                  return (
                    <button
                      suppressHydrationWarning
                      type="button"
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-brand-accent text-background-outer font-bold border border-brand-accent"
                          : "bg-white/5 text-white/70 hover:text-white border border-white/10"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Timeline */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-brand-accent font-bold mb-3">
                4. Target Launch Timeline
              </label>
              <div className="flex flex-wrap gap-2.5">
                {timelineOptions.map((t) => {
                  const isSelected = selectedTimeline === t;
                  return (
                    <button
                      suppressHydrationWarning
                      type="button"
                      key={t}
                      onClick={() => setSelectedTimeline(t)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-brand-accent text-background-outer font-bold border border-brand-accent"
                          : "bg-white/5 text-white/70 hover:text-white border border-white/10"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Project Vision */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-brand-accent font-bold mb-3">
                5. Project Description &amp; Objectives
              </label>
              <textarea
                suppressHydrationWarning
                rows={4}
                placeholder="Tell us about your brand vision, goals, and key deliverables..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors resize-none"
              />
            </div>

            {errorMessage && (
              <p className="text-xs text-red-400 font-mono">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              suppressHydrationWarning
              type="submit"
              disabled={formState === "loading"}
              className="group relative w-full py-4 sm:py-5 rounded-2xl bg-brand-accent text-background-outer font-oswald text-base sm:text-lg uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white hover:shadow-[0_0_35px_rgba(196,232,109,0.5)] active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {formState === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>TRANSMITTING BRIEF...</span>
                </>
              ) : (
                <>
                  <span>START A CONVERSATION</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </>
              )}
            </button>

            <div className="flex items-center justify-between text-[11px] text-white/50 font-mono pt-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                Direct founder review
              </span>
              <span>Visakhapatnam, IND &amp; USA</span>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
