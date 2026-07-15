import { MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

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
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Visit Us</h3>
                <p className="text-foreground-muted">
                  43-20-31/49-20-31, Beside the Bata Showroom in TSN Colony,<br/>
                  Ground Floor, Hotel Sinka Grand,<br/>
                  Dondaparthi, Visakhapatnam, Andhra Pradesh – 530016
                </p>
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

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-accent">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Call Us</h3>
                <p className="text-foreground-muted">
                  +91 9494835771 <br/>
                  +91 7995138462
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
