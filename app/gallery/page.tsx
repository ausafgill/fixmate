import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Project Gallery | FixMate Dubai",
  description:
    "Explore before-and-after photos of FixMate Dubai's plumbing, electrical, carpentry, and painting projects across the city.",
  keywords: [
    "home maintenance gallery",
    "Dubai renovation photos",
    "FixMate projects",
    "Dubai handyman portfolio",
  ],
  openGraph: {
    title: "Project Gallery | FixMate Dubai",
    description:
      "Explore before-and-after photos of FixMate Dubai's plumbing, electrical, carpentry, and painting projects across the city.",
    url: "/gallery",
    siteName: "FixMate Dubai",
    type: "website",
    images: [
      {
        url: "/og/gallery.svg",
        width: 1200,
        height: 630,
        alt: "FixMate Dubai project gallery",
      },
    ],
  },
};

export default function Page() {
  return <GalleryPage />;
}
