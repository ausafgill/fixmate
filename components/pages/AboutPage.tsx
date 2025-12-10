"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Award, MapPin, ShieldCheck, Timer } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    description:
      "Deliver reliable, high-quality home maintenance so every family enjoys a safe, comfortable space without the hassle.",
    icon: ShieldCheck,
  },
  {
    title: "Our Values",
    description:
      "Trust, craftsmanship, and clear communication. We treat every job like it is our own home.",
    icon: Award,
  },
  {
    title: "Years of Experience",
    description:
      "A decade of hands-on expertise across plumbing, electrical, painting, and general repairs.",
    highlight: "10+",
    icon: Timer,
  },
  {
    title: "Service Coverage",
    description: "Dubai and UAE",
    icon: MapPin,
  },
];

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay },
    },
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <motion.div
          variants={fadeIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 sm:space-y-6"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary">
            About Fixmate
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
            Your trusted handyman partner in Dubai
          </h1>
          <p className="text-base sm:text-lg text-text-light max-w-2xl">
            We are a professional handyman service based in Dubai, offering
            reliable home maintenance and repair solutions.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              "Certified technicians",
              "Transparent pricing",
              "On-time service",
              "Quality guaranteed",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg bg-bg-dark/70 px-4 py-3 shadow-card"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✓
                </span>
                <span className="text-text-dark font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-component">
            <Image
              src="/assets/images/team.jpeg"
              alt="Fixmate Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              variants={fadeIn(index * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="h-full rounded-xl bg-bg-dark p-6 shadow-card hover:shadow-component transition-all"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                {card.title}
              </h3>
              <p className="text-text-light">
                {card.highlight ? (
                  <span className="text-3xl font-bold text-primary mr-2">
                    {card.highlight}
                  </span>
                ) : null}
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
