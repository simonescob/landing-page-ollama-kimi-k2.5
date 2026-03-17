"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Sun } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#products", label: "Products" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-dark font-bold text-xl"
            >
              <div
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? "bg-primary" : "bg-white/20"
                }`}
              >
                <Sun
                  className={`w-5 h-5 ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                />
              </div>
              <span
                className={`transition-colors ${
                  isScrolled ? "text-dark" : "text-white"
                }`}
              >
                Florida
                <span className="text-primary">Fit</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-dark/80" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-dark hover:bg-dark/10"
                    : "text-white hover:bg-white/20"
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-cream z-50 md:hidden shadow-2xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-lg font-medium text-dark hover:text-primary transition-colors border-b border-secondary/10"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <button className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Shop Now
                  </button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}