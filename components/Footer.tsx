import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+971 55 360 2986"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  return (
    <footer className="border-t bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center shadow-component">
                <span className="text-white font-bold text-lg sm:text-xl">F</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-text-dark">Fixmate</h3>
            </div>
            <p className="text-sm sm:text-base text-text-light mb-3 sm:mb-4">
              Your trusted partner for all home repair and maintenance needs.
              Professional, reliable, and affordable handyman services.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light">
              <MapPin size={14} className="sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="font-medium">Serving Dubai and UAE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-text-dark text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-text-dark text-base sm:text-lg">Get In Touch</h4>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium rounded-lg shadow-component transition-all hover:scale-105 mb-3 sm:mb-4 text-sm sm:text-base"
            >
              <MessageCircle size={18} className="sm:w-5 sm:h-5" />
              <span>WhatsApp Us</span>
            </a>
            <p className="text-xs sm:text-sm text-text-light mt-3 sm:mt-4">
              Quick response guaranteed
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-text-light">
          <p>&copy; {currentYear} Fixmate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

