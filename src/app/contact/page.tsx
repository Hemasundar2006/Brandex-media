import { MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | BrandEx Media",
  description: "Get in touch with us to start your next big project.",
};

export default function ContactPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-20 min-h-[80vh]">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get in <span className="text-brand-accent">Touch.</span>
          </h1>
          <p className="text-foreground-muted text-lg mb-12">
            Have a project in mind? Let's talk about how we can help you achieve your goals.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Visit Us</h3>
                <p className="text-foreground-muted">123 Creative Blvd, New York, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-accent">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email Us</h3>
                <p className="text-foreground-muted">hello@brandexmedia.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-accent">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Call Us</h3>
                <p className="text-foreground-muted">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          <form className="flex flex-col gap-6">
            <div>
              <label className="block text-white/70 text-sm mb-2">Name</label>
              <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors" />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Email</label>
              <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors" />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Message</label>
              <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors resize-none" />
            </div>
            <button type="button" className="w-full bg-brand-mid hover:bg-brand-mid/90 text-white font-bold py-4 rounded-xl transition-colors">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
