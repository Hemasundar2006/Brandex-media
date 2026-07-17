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
  title: "BrandEx Media | The Best Content Creator",
  description: "Modern creative media and digital marketing agency.",
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
