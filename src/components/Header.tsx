import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Security", href: "#security" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#03030b]/80 backdrop-blur-lg border-b border-indigo-950/40 shadow-[0_10px_30px_rgba(2,2,5,0.8)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2.5 group">
              <Logo size={40} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-display text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-400 group-hover:from-white group-hover:to-indigo-300 transition-all">
                Pixel<span className="text-indigo-400 font-extrabold">Forge</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-sans text-sm font-medium text-gray-300 hover:text-white hover:shadow-indigo-500/10 transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/923041245158"
                target="_blank"
                referrerPolicy="no-referrer"
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm text-white group overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:scale-105" />
                <div className="absolute inset-[1px] bg-[#03030c] rounded-[11px] group-hover:bg-transparent transition-all duration-300" />
                <span className="relative z-10 flex items-center gap-2 text-indigo-300 group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                  WhatsApp Support
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-950/20 focus:outline-none transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[70px] z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#020205]/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />

            {/* Content Drawer */}
            <div className="absolute top-0 inset-x-0 bg-[#04040d]/95 border-b border-indigo-950/40 p-6 flex flex-col space-y-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-xl font-medium text-base text-gray-300 hover:text-white hover:bg-indigo-950/20 transition-all"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="pt-4 border-t border-indigo-950/30">
                <a
                  href="https://wa.me/923041245158"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold text-white shadow-lg shadow-indigo-600/20 hover:shadow-purple-600/30 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
