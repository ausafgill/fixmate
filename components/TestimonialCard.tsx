import { motion, useReducedMotion } from "framer-motion";
import { Star, User } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  avatar?: string | null;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay },
    },
  });
  const hoverShift = prefersReducedMotion ? {} : { y: -4 };

  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      variants={fadeInUp(index * 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hoverShift}
      className="bg-bg-dark rounded-lg shadow-card hover:shadow-component transition-all p-4 sm:p-6 md:p-8 h-full flex flex-col"
    >
      {/* Rating Stars */}
      <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <div className="flex-1 mb-4 sm:mb-6">
        <p className="text-text-dark text-base sm:text-lg leading-relaxed italic">
          &ldquo;{testimonial.comment}&rdquo;
        </p>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold text-xs sm:text-sm">{initials}</span>
            </div>
          )}
        </div>

        {/* Name and Details */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-text-dark text-sm sm:text-base mb-0.5 sm:mb-1">
            {testimonial.name}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-text-light">
            <span>{testimonial.location}</span>
            <span className="text-border">•</span>
            <span>{testimonial.service}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
