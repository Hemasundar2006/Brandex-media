export const metadata = {
  title: "Privacy Policy | BrandEx Media",
  description: "Privacy Policy and data collection terms.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-20 min-h-[80vh]">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-brand text-foreground-muted">
        <p>Last updated: [Date]</p>
        
        <h2 className="text-2xl text-white font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          BrandEx Media ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
        </p>

        <h2 className="text-2xl text-white font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p>
          We may collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, or telephone number.
        </p>

        <h2 className="text-2xl text-white font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <p>
          We use information that we collect about you or that you provide to us, including any personal information, to present our Website and its contents to you, to provide you with information, products, or services that you request from us, and to fulfill any other purpose for which you provide it.
        </p>
        
        {/* Additional legal boilerplate goes here */}
      </div>
    </main>
  );
}
