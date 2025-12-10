import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services | FixMate Dubai Home Maintenance",
  description:
    "Browse FixMate Dubai’s full list of handyman, plumbing, electrical, and painting services with transparent pricing.",
  keywords: [
    "Dubai handyman services",
    "Dubai plumbing services",
    "Dubai electrical repair",
    "home maintenance services Dubai",
  ],
  openGraph: {
    title: "Services | FixMate Dubai Home Maintenance",
    description:
      "Browse FixMate Dubai’s full list of handyman, plumbing, electrical, and painting services with transparent pricing.",
    url: "/services",
    siteName: "FixMate Dubai",
    type: "website",
    images: [
      {
        url: "/og/services.svg",
        width: 1200,
        height: 630,
        alt: "FixMate Dubai services overview",
      },
    ],
  },
};

export default function Page() {
  return <ServicesPage />;
}
