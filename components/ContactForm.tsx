"use client";

import { useState, FormEvent } from "react";

const whatsappNumber = "+971 55 360 2986";
const whatsappNumberClean = "971553602986";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const whatsappMessage = `Hello! I'm interested in your services.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service Needed:* ${formData.service}

*Message:*
${formData.message}

---
Sent from FixMate Dubai website`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumberClean}?text=${encodedMessage}`;

    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Send a Message</h2>
        <p className="text-muted-foreground">
          Fill out the form and we'll get back to you via WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-foreground">
            <span>Name *</span>
            <input
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-foreground">
            <span>Phone *</span>
            <input
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 50 123 4567"
              required
            />
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>Service Needed *</span>
          <input
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Plumbing, electrical, painting..."
            required
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>Message *</span>
          <textarea
            className="w-full min-h-[140px] rounded-lg border border-border bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share the details and preferred timing."
            required
          />
        </label>

        <div className="pt-2">
          <button
            className="w-full rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Opening WhatsApp...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Send Message via WhatsApp
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
