"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    
    // Use the desired WhatsApp number (with country code, no plus sign or spaces)
    // Example: 919876543210 for India
    const phoneNumber = "919010205771";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className="block text-white/70 text-sm mb-2">Name</label>
        <input 
          required 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          type="text" 
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors" 
        />
      </div>
      <div>
        <label className="block text-white/70 text-sm mb-2">Email</label>
        <input 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors" 
        />
      </div>
      <div>
        <label className="block text-white/70 text-sm mb-2">Message</label>
        <textarea 
          required 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          rows={4} 
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors resize-none" 
        />
      </div>
      <button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        Send via WhatsApp
      </button>
    </form>
  );
}
