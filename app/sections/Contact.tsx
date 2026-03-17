"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/app/components/ContactForm";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Let's Find Your{" "}
            <span className="text-secondary">Perfect Fit</span>
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Tell us about your Florida activities and our local experts will
            recommend the ideal shoes for your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">
                Contact Information
              </h3>
              <p className="text-dark/70 mb-8">
                Our Florida-based team is ready to help you find the perfect shoes
                for the Sunshine State climate.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0"
                >
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Email</h4>
                  <a
                    href="mailto:hello@floridafit.com"
                    className="text-dark/70 hover:text-primary transition-colors"
                  >
                    hello@floridafit.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Phone</h4>
                  <a
                    href="tel:+13055550123"
                    className="text-dark/70 hover:text-primary transition-colors"
                  >
                    (305) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0"
                >
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Hours</h4>
                  <p className="text-dark/70">
                    Mon - Fri: 9AM - 6PM EST
                    <br />
                    Sat: 10AM - 4PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0"
                >
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Location</h4>
                  <p className="text-dark/70">
                    123 Ocean Drive
                    <br />
                    Miami, FL 33139
                  </p>
                </div>
              </div>
            </div>

            {/* Florida Badge */}
            <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cream" />
                </div>
                <div>
                  <div className="font-semibold text-dark">Florida Based</div>
                  <div className="text-sm text-dark/60">
                    Local expertise since 2020
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}