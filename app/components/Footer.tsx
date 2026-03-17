"use client";

import { Sun, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  shop: [
    { label: "Running Shoes", href: "#" },
    { label: "Trail Shoes", href: "#" },
    { label: "Walking Shoes", href: "#" },
    { label: "Golf Shoes", href: "#" },
    { label: "New Arrivals", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Size Guide", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Store Locator", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-primary">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Florida<span className="text-primary">Fit</span>
              </span>
            </Link>
            <p className="text-cream/70 mb-6 max-w-sm">
              Premium sport shoes engineered for Florida's unique climate.
              From Miami humidity to Tampa Bay storms, we've got you covered.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@floridafit.com"
                className="flex items-center gap-3 text-cream/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@floridafit.com
              </a>
              <a
                href="tel:+13055550123"
                className="flex items-center gap-3 text-cream/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                (305) 555-0123
              </a>
              <div className="flex items-center gap-3 text-cream/70">
                <MapPin className="w-5 h-5" />
                Miami, FL 33101
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} FloridaFit. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-cream/10 hover:bg-primary text-cream/70 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-6 text-sm text-cream/50">
            <Link href="#" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cream transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}