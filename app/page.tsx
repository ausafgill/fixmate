import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "FixMate Dubai | Home Maintenance & Repair Services",
  description:
    "Book trusted handyman, plumbing, electrical, and painting experts in Dubai with FixMate's fast, reliable team.",
  keywords: [
    "handyman Dubai",
    "home repair Dubai",
    "plumbing services Dubai",
    "electrical maintenance Dubai",
    "painting services Dubai",
  ],
  openGraph: {
    title: "FixMate Dubai | Home Maintenance & Repair Services",
    description:
      "Book trusted handyman, plumbing, electrical, and painting experts in Dubai with FixMate's fast, reliable team.",
    url: "/",
    siteName: "FixMate Dubai",
    type: "website",
    images: [
      {
        url: "/og/home.svg",
        width: 1200,
        height: 630,
        alt: "FixMate Dubai home maintenance and repair services",
      },
    ],
  },
};

export default function Page() {
  return <HomePage />;
}
