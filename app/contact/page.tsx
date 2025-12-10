import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact FixMate Dubai | Book Maintenance Services",
  description:
    "Get in touch with FixMate Dubai to book handyman, plumbing, electrical, or painting services. Fast responses via WhatsApp, phone, or email.",
  keywords: [
    "contact FixMate",
    "book handyman Dubai",
    "Dubai maintenance contact",
    "FixMate WhatsApp",
  ],
  openGraph: {
    title: "Contact FixMate Dubai | Book Maintenance Services",
    description:
      "Get in touch with FixMate Dubai to book handyman, plumbing, electrical, or painting services. Fast responses via WhatsApp, phone, or email.",
    url: "/contact",
    siteName: "FixMate Dubai",
    type: "website",
    images: [
      {
        url: "/og/contact.svg",
        width: 1200,
        height: 630,
        alt: "Contact FixMate Dubai for maintenance services",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <header className="text-center mb-12 space-y-3">
        <p className="text-sm uppercase tracking-[0.25rem] text-muted-foreground">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold">Get in Touch</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're here to help with repairs, upgrades, and everything in between.
          Reach out and we'll respond quickly.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <a
            className="block w-full rounded-xl bg-green-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
            href="https://wa.me/971553602986"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>

          <ContactForm />
        </div>

        <aside className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Service Area</h3>
            <p className="text-muted-foreground">
              Proudly serving the local community and surrounding neighborhoods.
              If you're nearby, we can help.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Main City & Downtown
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                North & South Suburbs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Nearby counties by appointment
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Working Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-medium text-foreground">8:00 AM – 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-foreground">9:00 AM – 3:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-foreground">By appointment</span>
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Need urgent help? Reach out on WhatsApp for the fastest response.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
