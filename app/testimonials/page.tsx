import type { Metadata } from "next";
import TestimonialsPage from "@/components/pages/TestimonialsPage";

export const metadata: Metadata = {
  title: "Customer Testimonials | FixMate Dubai",
  description:
    "Read real reviews from FixMate Dubai customers about our handyman, plumbing, electrical, and painting services.",
  keywords: [
    "FixMate reviews",
    "Dubai handyman testimonials",
    "home maintenance feedback",
    "service ratings Dubai",
  ],
};

export default function Page() {
  return <TestimonialsPage />;
}
