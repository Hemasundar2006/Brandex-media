import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brandexmarketing.in"),
  title: "BrandEx Media | The Best Content Creator",
  description: "BrandEx Media is a modern creative media and digital marketing agency based in IND and USA. We specialize in digital growth, branding, and content creation.",
  keywords: ["BrandEx Media", "digital marketing agency", "content creation", "branding", "SEO", "social media marketing", "video production", "creative media"],
  authors: [{ name: "BrandEx Media" }],
  publisher: "BrandEx Media",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-white bg-background-center" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TYVDN56BNJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TYVDN56BNJ');
          `}
        </Script>
        <Header />
        <div className="flex-grow pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
