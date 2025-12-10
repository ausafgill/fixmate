"use client";

import { motion, useReducedMotion } from "framer-motion";
import ServicesList from "@/components/ServicesList";
import servicesData from "@/content/services.json";

export default function ServicesPage() {
  const prefersReducedMotion = useReducedMotion();
  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">
      {/* Page Header Section */}
      <section className="mb-8 sm:mb-12 md:mb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-3 sm:mb-4 px-2 sm:px-0">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-light max-w-3xl mx-auto px-2 sm:px-0">
            Comprehensive home repair and maintenance solutions tailored to your needs.
            Get professional service with transparent pricing and guaranteed satisfaction.
          </p>
        </motion.div>
      </section>

      {/* Services Grid Layout */}
      <section>
        <ServicesList services={servicesData} />
      </section>

      {/* Future-proofing comment: Booking system can be added here later */}
      {/* Individual service pages can be accessed via /services/[serviceId] */}
    </div>
  );
}
