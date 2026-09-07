import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";
import QuickContactDock from "@/components/QuickContactDock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brandexmarketing.in"),
  title: {
    default: "BrandEx Media | Creative Agency, Content Production & Digital Growth",
    template: "%s | BrandEx Media",
  },
  description:
    "BrandEx Media is a premier creative media, visual production, and digital marketing agency based in IND and USA. We build cinematic content, brand strategies, and high-converting marketing campaigns that demand attention.",
  keywords: [
    "BrandEx Media",
    "digital marketing agency",
    "content creation agency",
    "branding agency",
    "video production studio",
    "commercial shoots",
    "reel making",
    "social media growth",
    "creative marketing IND USA",
    "Visakhapatnam marketing agency",
  ],
  authors: [{ name: "BrandEx Media" }, { name: "Pradeep Lenka" }, { name: "Mahesh Arjilli" }],
  creator: "BrandEx Media",
  publisher: "BrandEx Media",
  alternates: {
    canonical: "https://www.brandexmarketing.in",
  },
  openGraph: {
    title: "BrandEx Media | Creative Agency & Production Studio",
    description:
      "We make brands impossible to ignore. Strategy, high-end visual production, and measurable digital growth.",
    url: "https://www.brandexmarketing.in",
    siteName: "BrandEx Media",
    images: [
      {
        url: "/IMG_6459.PNG",
        width: 1200,
        height: 630,
        alt: "BrandEx Media Logo & Creative Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandEx Media | Creative Agency & Production Studio",
    description: "We make brands impossible to ignore. Creative strategy, visual production, and digital growth.",
    images: ["/IMG_6459.PNG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.brandexmarketing.in/#organization",
      name: "BrandEx Media",
      url: "https://www.brandexmarketing.in",
      logo: "https://www.brandexmarketing.in/IMG_6459.PNG",
      description:
        "BrandEx Media is a modern creative media and digital marketing agency specializing in digital growth, branding, commercial video production, and content creation.",
      founders: [
        {
          "@type": "Person",
          name: "Pradeep Lenka",
          jobTitle: "Founder & Director",
        },
        {
          "@type": "Person",
          name: "Mahesh Arjilli",
          jobTitle: "Founder & Director",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "43-20-31/49-20-31, Beside Bata Showroom, TSN Colony, Ground Floor, Hotel Sinka Grand, Dondaparthi",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530016",
        addressCountry: "IN",
      },
      telephone: ["+919494835771", "+917995138462"],
      email: "hello@brandexmedia.com",
      sameAs: [
        "https://www.instagram.com/brandexmarketing",
        "https://www.linkedin.com/company/brandex-media",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.brandexmarketing.in/#website",
      url: "https://www.brandexmarketing.in",
      name: "BrandEx Media",
      publisher: {
        "@id": "https://www.brandexmarketing.in/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${syne.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P2VCWVSV');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans text-white bg-background-center cursor-default selection:bg-brand-accent selection:text-background-outer"
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2VCWVSV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <CustomCursor />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18435565332"
          strategy="afterInteractive"
        />
        <Script id="google-tag-aw-18435565332" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18435565332');
          `}
        </Script>

        {/* Google tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TVGCM10V91"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-tvgcm10v91" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TVGCM10V91');
          `}
        </Script>

        <Header />
        <div className="flex-grow pt-20 md:pt-24">{children}</div>
        <Footer />
        <QuickContactDock />

        {/* Mobile Sticky CTA Bar */}
        <div className="lg:hidden fixed bottom-4 left-0 w-full px-4 z-40 pointer-events-none">
          <Link
            href="/contact"
            className="pointer-events-auto w-full bg-brand-accent text-background-outer font-oswald uppercase tracking-widest font-bold py-3.5 px-6 rounded-2xl flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(196,232,109,0.35)] border border-brand-accent active:scale-95 transition-transform text-sm"
          >
            <span>Start a Project with BrandEx</span>
            <div className="w-8 h-8 rounded-xl bg-background-outer text-brand-accent flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </body>
    </html>
  );
}
