import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | FixMate Dubai",
  description: "We couldn't find the page you're looking for. Explore FixMate Dubai services instead.",
  keywords: ["404", "page not found", "FixMate Dubai"],
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2rem] text-muted-foreground">Error 404</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">Page not found</h1>
        <p className="text-muted-foreground max-w-xl">
          The page you requested doesn't exist. Let’s get you back to our services and support.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow hover:bg-primary/90 transition"
        >
          Go to Home
        </Link>
        <Link
          href="/services"
          className="rounded-lg border border-primary px-6 py-3 text-primary font-semibold hover:bg-primary/10 transition"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}
