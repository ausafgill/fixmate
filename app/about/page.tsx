import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About FixMate Dubai | Home Maintenance Experts",
  description:
    "Learn about FixMate Dubai's certified technicians, safety-first approach, and commitment to reliable home maintenance services.",
  keywords: [
    "about FixMate",
    "Dubai maintenance team",
    "handyman company Dubai",
    "trusted home services",
  ],
  openGraph: {
    title: "About FixMate Dubai | Home Maintenance Experts",
    description:
      "Learn about FixMate Dubai's certified technicians, safety-first approach, and commitment to reliable home maintenance services.",
    url: "/about",
    siteName: "FixMate Dubai",
    type: "website",
    images: [
      {
        url: "/og/about.svg",
        width: 1200,
        height: 630,
        alt: "About FixMate Dubai home maintenance experts",
      },
    ],
  },
};

export default function Page() {
  return <AboutPage />;
}
