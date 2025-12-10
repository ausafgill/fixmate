"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Square,
  Settings,
} from "lucide-react";
import galleryData from "@/content/gallery.json";

// Icon mapping for services
const iconMap: { [key: string]: React.ElementType } = {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Square,
  Settings,
};

// WhatsApp configuration
const whatsappNumber = "+971 55 360 2986";
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  price?: string;
  fullDescription?: string;
  images?: string[];
}

// Function to get a matching image for a service based on category/type
const getServiceImage = (service: Service): string | null => {
  const serviceCategoryMap: Record<string, string> = {
    "Plumbing Services": "Plumbing",
    "Electrical Work": "Electrical",
    "Carpentry": "General",
    "Painting": "General",
    "Drywall Repair": "General",
    "General Maintenance": "General",
  };

  const category = serviceCategoryMap[service.title] || "General";

  // Utility: pick a random image from array
  const pickRandom = (arr: any[]) =>
    arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)].image : null;

  // 1️⃣ Try exact category match
  const byCategory = galleryData.filter((item) => item.category === category);
  if (byCategory.length > 0) return pickRandom(byCategory);

  // 2️⃣ Keyword fallback for edge cases
  const titleLower = service.title.toLowerCase();

  if (titleLower.includes("plumb")) {
    const plumbing = galleryData.filter((i) => i.category === "Plumbing");
    return pickRandom(plumbing);
  }

  if (titleLower.includes("electric")) {
    const electrical = galleryData.filter((i) => i.category === "Electrical");
    return pickRandom(electrical);
  }

  // 3️⃣ Final fallback → any general category image (random)
  const general = galleryData.filter((i) => i.category === "General");
  return pickRandom(general);
};


interface ServicesListProps {
  services: Service[];
}

export default function ServicesList({ services }: ServicesListProps) {
  const prefersReducedMotion = useReducedMotion();
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay },
    },
  });
  const hoverShift = prefersReducedMotion ? {} : { y: -4 };

  const getWhatsAppMessage = (service: Service) => {
    const message = `Hi! I'm interested in ${service.title}. Can you provide more information?`;
    return encodeURIComponent(message);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Settings;
        const serviceWhatsAppUrl = `${whatsappUrl}?text=${getWhatsAppMessage(service)}`;

        const serviceImage = getServiceImage(service);

        return (
          <motion.div
            key={service.id}
            variants={fadeInUp(index * 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={hoverShift}
            className="relative bg-bg-dark p-6 rounded-lg shadow-card hover:shadow-component transition-all flex flex-col overflow-hidden"
          >
            {/* Background Image */}
            {serviceImage && (
              <div className="absolute inset-0 opacity-10 hover:opacity-15 transition-opacity duration-300">
                <Image
                  src={serviceImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
              </div>
            )}
            
            {/* Content with relative positioning to appear above background */}
            <div className="relative z-10">
            {/* Icon */}
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <IconComponent className="w-7 h-7 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-text-dark mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-text-light mb-4 flex-grow">{service.description}</p>

            {/* Optional Price */}
            {service.price && (
              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">{service.price}</span>
              </div>
            )}

            {/* Features List (if available) */}
            {service.features && service.features.length > 0 && (
              <ul className="mb-4 space-y-1">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-sm text-text-light flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Action Buttons */}
            <div className="mt-auto space-y-2">
              {/* View Details Link */}
              <Link
                href={`/services/${service.id}`}
                className="block text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View Details →
              </Link>

              {/* WhatsApp Button */}
              <a
                href={serviceWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium rounded-lg shadow-component transition-all hover:scale-105"
              >
                <MessageCircle size={18} />
                <span>Contact via WhatsApp</span>
              </a>
            </div>

            {/* Future-proofing comment: Booking system can be added here later */}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
