"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowLeft } from "lucide-react";
import type servicesData from "@/content/services.json";
import {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Square,
  Settings,
} from "lucide-react";

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

type Service = (typeof servicesData)[number];

export default function ServiceDetailPage({ service }: { service: Service }) {
  const prefersReducedMotion = useReducedMotion();
  const IconComponent = iconMap[service.icon] || Settings;
  const fullDescription = (service as any).fullDescription || service.description;
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay },
    },
  });
  const hoverShift = prefersReducedMotion ? {} : { y: -3 };
  const tapShift = prefersReducedMotion ? {} : { y: 1 };

  const getWhatsAppMessage = () => {
    const message = `Hi! I'm interested in ${service.title}. Can you provide more information and pricing?`;
    return encodeURIComponent(message);
  };

  const serviceWhatsAppUrl = `${whatsappUrl}?text=${getWhatsAppMessage()}`;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Back Button */}
      <motion.div
        variants={fadeInUp()}
        initial="hidden"
        animate="visible"
        className="mb-6"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-text-light hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </Link>
      </motion.div>

      {/* Service Header */}
      <motion.div
        variants={fadeInUp(0.05)}
        initial="hidden"
        animate="visible"
        className="mb-6 sm:mb-8"
      >
        <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          </div>
          <div className="flex-grow min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-2 sm:mb-3">
              {service.title}
            </h1>
            {(service as any).price && (
              <div className="mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-primary">{(service as any).price}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Full Description */}
      <motion.section
        variants={fadeInUp(0.1)}
        initial="hidden"
        animate="visible"
        className="mb-6 sm:mb-8"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-text-dark mb-3 sm:mb-4">About This Service</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-text-light text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {fullDescription}
          </p>
        </div>
      </motion.section>

      {/* Features List */}
      {service.features && service.features.length > 0 && (
        <motion.section
          variants={fadeInUp(0.15)}
          initial="hidden"
          animate="visible"
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-text-dark mb-3 sm:mb-4">What's Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-bg-light rounded-lg"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-text-dark">{feature}</span>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Image Gallery */}
      {/* {images.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-text-dark mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-card"
              >
                <img
                  src={image}
                  alt={`${service.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )} */}

      {/* Placeholder for gallery when no images */}
      {/* {images.length === 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-bg-light rounded-lg p-12 text-center border-2 border-dashed border-text-light/20">
            <ImageIcon className="w-16 h-16 text-text-light/40 mx-auto mb-4" />
            <p className="text-text-light">Gallery images will be displayed here when available</p>
          </div>
        </motion.section>
      )} */}

      {/* WhatsApp CTA Section */}
      <motion.section
        variants={fadeInUp(0.2)}
        initial="hidden"
        animate="visible"
        className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
      >
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-text-dark mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-light mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Contact us via WhatsApp to discuss your needs, get a quote, or schedule a service.
            We're here to help!
          </p>
          <motion.a
            href={serviceWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={hoverShift}
            whileTap={tapShift}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg shadow-component transition-all text-base sm:text-lg"
          >
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            <span>Contact via WhatsApp</span>
          </motion.a>
        </div>
      </motion.section>

      {/* Future-proofing comment: Booking system can be added here later */}
      {/* Service ID: {serviceId} - This can be used for booking system integration */}
    </div>
  );
}
