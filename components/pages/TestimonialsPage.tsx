"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid3x3, LayoutGrid } from "lucide-react";
import testimonialsData from "@/content/testimonials.json";
import TestimonialCard from "@/components/TestimonialCard";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  avatar?: string | null;
};

type ViewMode = "grid" | "slider";

export default function TestimonialsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentSlide, setCurrentSlide] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay },
    },
  });
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut", delay } },
  });

  // Auto-rotate slider
  useEffect(() => {
    if (viewMode === "slider") {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [viewMode]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        variants={fadeInUp()}
        initial="hidden"
        animate="visible"
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-3 sm:mb-4 px-2 sm:px-0">
          What Our Clients Say
        </h1>
        <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
          Don&apos;t just take our word for it — hear from our satisfied customers who trust us with their home maintenance needs
        </p>
      </motion.div>

      {/* View Mode Toggle */}
      <motion.div
        variants={fadeInUp(0.05)}
        initial="hidden"
        animate="visible"
        className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2 sm:px-0"
      >
        <button
          onClick={() => setViewMode("grid")}
          className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base ${
            viewMode === "grid"
              ? "bg-primary text-white shadow-component"
              : "bg-bg-dark text-text-dark hover:bg-primary/10 hover:text-primary shadow-card"
          }`}
          aria-label="Grid view"
        >
          <Grid3x3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Grid View</span>
          <span className="xs:hidden">Grid</span>
        </button>
        <button
          onClick={() => setViewMode("slider")}
          className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base ${
            viewMode === "slider"
              ? "bg-primary text-white shadow-component"
              : "bg-bg-dark text-text-dark hover:bg-primary/10 hover:text-primary shadow-card"
          }`}
          aria-label="Slider view"
        >
          <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Slider View</span>
          <span className="xs:hidden">Slider</span>
        </button>
      </motion.div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <motion.div
          variants={fadeIn()}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {testimonialsData.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      )}

      {/* Slider View */}
      {viewMode === "slider" && (
        <motion.div
          variants={fadeIn(0.05)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-2 sm:px-0"
        >
          <div className="relative">
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-lg min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  className="w-full"
                >
                  <TestimonialCard
                    testimonial={testimonialsData[currentSlide] as Testimonial}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <button
                onClick={prevSlide}
                className="p-2.5 sm:p-3 rounded-full bg-bg-dark hover:bg-primary hover:text-white transition-all shadow-card touch-manipulation"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-1.5 sm:gap-2 items-center">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all touch-manipulation ${
                      index === currentSlide
                        ? "bg-primary w-6 sm:w-8"
                        : "bg-text-light w-2 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2.5 sm:p-3 rounded-full bg-bg-dark hover:bg-primary hover:text-white transition-all shadow-card touch-manipulation"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-text-light">
              {currentSlide + 1} / {testimonialsData.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
