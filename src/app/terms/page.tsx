export const metadata = {
  title: "Terms of Service | BrandEx Media",
  description: "Terms and conditions for using BrandEx Media services.",
};

export default function TermsPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-20 min-h-[80vh]">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
      <div className="prose prose-invert prose-brand text-foreground-muted">
        <p>Last updated: [Date]</p>
        
        <h2 className="text-2xl text-white font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
        <p>
          By accessing or using our Website and Services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the Website or use any services.
        </p>

        <h2 className="text-2xl text-white font-semibold mt-8 mb-4">2. Intellectual Property</h2>
        <p>
          The Website and its original content, features, and functionality are and will remain the exclusive property of BrandEx Media and its licensors.
        </p>

        <h2 className="text-2xl text-white font-semibold mt-8 mb-4">3. Limitation of Liability</h2>
        <p>
          In no event shall BrandEx Media, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
        </p>
        
        {/* Additional legal boilerplate goes here */}
      </div>
    </main>
  );
}
