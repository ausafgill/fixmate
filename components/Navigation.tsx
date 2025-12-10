"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const whatsappNumber = "+971 55 360 2986"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-bg-dark/95 backdrop-blur supports-[backdrop-filter]:bg-bg-dark/60 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center shadow-component">
              <span className="text-white font-bold text-lg sm:text-xl">F</span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Fixmate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-dark transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium rounded-lg shadow-component transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-text-dark touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <Menu size={22} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
              className="lg:hidden overflow-hidden bg-bg-light border-t"
            >
              <div className="flex flex-col space-y-2 sm:space-y-3 pb-4 sm:pb-5 pt-3 sm:pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm sm:text-base font-medium text-text-dark transition-colors hover:text-primary px-4 sm:px-5 py-2.5 sm:py-3 touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 sm:px-5 pt-2 sm:pt-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium rounded-lg shadow-component transition-all touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Contact via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;

