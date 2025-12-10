"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Square,
  Settings,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesData from "@/content/services.json";
import galleryData from "@/content/gallery.json";
import testimonialsData from "@/content/testimonials.json";

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

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay },
    },
  });
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut", delay } },
  });
  const hoverShift = prefersReducedMotion ? {} : { y: -4 };
  const tapShift = prefersReducedMotion ? {} : { y: 1 };

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get first 6 services
  const featuredServices = servicesData.slice(0, 6);
  // Get first 6 gallery items
  const featuredGallery = galleryData.slice(0, 6);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[750px] flex items-center justify-center overflow-hidden -mx-4 sm:-mx-4 md:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+2rem)] md:w-[calc(100%+3rem)]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20">
          <Image
            src="/assets/images/bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
            quality={75}
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={fadeInUp()} initial="hidden" animate="visible">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Professional Home Maintenance & Repair Services in Dubai
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-0">
              Fast, Reliable, Affordable Services — Plumbing, Electrical, Painting & More
            </p>
            <motion.div
              whileHover={hoverShift}
              whileTap={tapShift}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg shadow-component transition-all text-base sm:text-lg"
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                <span>Get Started on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-bg-light -mx-4 sm:-mx-4 md:-mx-6 px-4 sm:px-4 md:px-6">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeInUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
              Comprehensive home repair and maintenance solutions for your every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {featuredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Settings;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp(index * 0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={hoverShift}
                  className="bg-bg-dark p-6 rounded-lg shadow-card hover:shadow-component transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-light">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-bg-dark -mx-4 sm:-mx-4 md:-mx-6 px-4 sm:px-4 md:px-6">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeInUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-3 sm:mb-4">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
              We're committed to delivering excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Award,
                title: "Certified Technicians",
                description: "Licensed and experienced professionals you can trust",
              },
              {
                icon: Clock,
                title: "On-Time Service",
                description: "We respect your time and arrive when promised",
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "No hidden fees, clear quotes before we start",
              },
              {
                icon: CheckCircle,
                title: "Quality Workmanship",
                description: "Guaranteed satisfaction with every job we complete",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                    variants={fadeInUp(index * 0.05)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={hoverShift}
                  className="bg-bg-light p-6 rounded-lg shadow-card hover:shadow-component transition-all text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-light">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-bg-light -mx-4 sm:-mx-4 md:-mx-6 px-4 sm:px-4 md:px-6">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeInUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-3 sm:mb-4">
              Our Recent Projects
            </h2>
            <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
              See the quality of our work through our completed projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {featuredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp(index * 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={hoverShift}
                className="relative overflow-hidden rounded-lg shadow-card hover:shadow-component transition-all group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Hammer className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-text-dark font-medium">{item.title}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">{item.category}</p>
                    <p className="text-white/80 text-xs">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="px-8">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-bg-dark -mx-4 sm:-mx-4 md:-mx-6 px-4 sm:px-4 md:px-6">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeInUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-3 sm:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="relative overflow-hidden rounded-lg bg-bg-light shadow-component p-6 sm:p-8 md:p-12 min-h-[250px] sm:min-h-[300px] flex items-center">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full text-center px-2 sm:px-0"
              >
                <div className="flex justify-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonialsData[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary"
                      />
                    )
                  )}
                </div>
                <p className="text-base sm:text-lg md:text-xl text-text-dark mb-4 sm:mb-6 italic px-2 sm:px-0">
                  "{testimonialsData[currentTestimonial].comment}"
                </p>
                <div>
                  <p className="font-semibold text-text-dark text-sm sm:text-base">
                    {testimonialsData[currentTestimonial].name}
                  </p>
                  <p className="text-text-light text-xs sm:text-sm">
                    {testimonialsData[currentTestimonial].location} •{" "}
                    {testimonialsData[currentTestimonial].service}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
                  )
                }
                className="p-2 rounded-full bg-bg-light hover:bg-primary hover:text-white transition-all shadow-card"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2 items-center">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-primary w-8"
                        : "bg-text-light"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length)
                }
                className="p-2 rounded-full bg-bg-light hover:bg-primary hover:text-white transition-all shadow-card"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }}
        whileHover={hoverShift}
        whileTap={tapShift}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-component flex items-center justify-center text-white transition-all"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </motion.a>
    </div>
  );
}
