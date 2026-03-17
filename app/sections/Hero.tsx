"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { NewsletterForm } from "@/app/components/NewsletterForm";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80"
          alt="Florida beach running at sunrise"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 pt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-cream/90 font-medium">
                Designed for Florida's Climate
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Conquer Florida's{" "}
              <span className="text-primary">Heat</span>{" "}
              in Style
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-cream/80 mb-8 max-w-xl"
            >
              Premium sport shoes engineered for humidity, heat, and the active
              Florida lifestyle. From Miami Beach trails to Orlando theme park
              marathons.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors group"
              >
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-colors"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  50K+
                </div>
                <div className="text-sm text-cream/70">Happy Floridians</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  4.9
                </div>
                <div className="text-sm text-cream/70">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  24h
                </div>
                <div className="text-sm text-cream/70">FL Delivery</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden lg:block"
          >
            <NewsletterForm />
          </motion.div>
        </div>
      </div>

      {/* Mobile Newsletter - Shows below on mobile */}
      <div className="lg:hidden relative z-10 px-4 pb-12 -mt-20">
        <NewsletterForm />
      </div>
    </section>
  );
}