"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import galleryData from "@/content/gallery.json";

type GalleryItem = {
  id: number;
  title: string;
  image: string;
  category: string;
  description?: string;
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
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
  const hoverShift = prefersReducedMotion ? {} : { y: -3 };

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(galleryData.map((item) => item.category)))];

  // Filter gallery items by category
  const filteredItems =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  // Handle image click to open lightbox
  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Handle keyboard navigation in lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight" && selectedImage) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex]);
    } else if (e.key === "ArrowLeft" && selectedImage) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex]);
    }
  };

  return (
    <div className="w-full" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Header */}
      <motion.div
        variants={fadeInUp()}
        initial="hidden"
        animate="visible"
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-3 sm:mb-4">
          Our Recent Work
        </h1>
        <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 sm:px-0">
          Explore our portfolio of completed projects across various services
        </p>
      </motion.div>

      {/* Category Filter Buttons */}
      <motion.div
        variants={fadeInUp(0.05)}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2 sm:px-0"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
              selectedCategory === category
                ? "bg-primary text-white shadow-component"
                : "bg-bg-dark text-text-dark hover:bg-primary/10 hover:text-primary shadow-card"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp(index * 0.03)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 8, transition: { duration: 0.2 } }}
              whileHover={hoverShift}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-card hover:shadow-component transition-all"
              onClick={() => handleImageClick(item)}
            >
              {/* Image Container */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    loading="lazy"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <ZoomIn className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm text-text-dark font-medium">{item.title}</p>
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="w-12 h-12 text-white" />
                  </motion.div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                  {item.description && (
                    <p className="text-white/80 text-xs mt-1 line-clamp-1">{item.description}</p>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-text-light text-lg">No items found in this category.</p>
        </motion.div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-60 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 8, transition: { duration: 0.2 } }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl max-h-[90vh] w-full mx-2 sm:mx-4"
              >
                {/* Image */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                  {selectedImage.image ? (
                    <Image
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      fill
                      className="object-contain"
                      sizes="90vw"
                      quality={90}
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <ZoomIn className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-2xl text-white font-semibold mb-2">{selectedImage.title}</p>
                        {selectedImage.description && (
                          <p className="text-white/80">{selectedImage.description}</p>
                        )}
                        <p className="text-primary text-sm mt-2">{selectedImage.category}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Arrows */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = filteredItems.findIndex(
                          (item) => item.id === selectedImage.id
                        );
                        const prevIndex =
                          (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                        setSelectedImage(filteredItems[prevIndex]);
                      }}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = filteredItems.findIndex(
                          (item) => item.id === selectedImage.id
                        );
                        const nextIndex = (currentIndex + 1) % filteredItems.length;
                        setSelectedImage(filteredItems[nextIndex]);
                      }}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
                      aria-label="Next image"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
