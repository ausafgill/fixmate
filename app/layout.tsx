import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const businessName = "FixMate Dubai";
const siteUrl = "https://www.fixmate.com";
const phone = "+971 55 360 2986";

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: businessName,
  image: `${siteUrl}/assets/images/bg.jpg`,
  url: siteUrl,
  telephone: phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: "Dubai",
  description: "Professional handyman and maintenance services in Dubai.",
  sameAs: [
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.linkedin.com",
    `https://wa.me/${phone.replace(/[^0-9]/g, "")}`,
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: businessName,
  url: siteUrl,
  logo: `${siteUrl}/assets/images/bg.jpg`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English"],
    },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: businessName,
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FixMate Dubai — Home Maintenance & Repair Services",
  description: "Professional handyman and maintenance services in Dubai.",
  keywords: [
    "handyman Dubai",
    "home maintenance Dubai",
    "repair services Dubai",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon/favicon-64x64.svg", sizes: "64x64", type: "image/svg+xml" },
      { url: "/favicon/favicon-128x128.svg", sizes: "128x128", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/favicon-128x128.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1 w-full">
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

