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
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/30 lg:bg-gradient-to-r lg:from-dark/90 lg:via-dark/50 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent lg:bg-gradient-to-t lg:from-cream/30 lg:via-transparent lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 pt-32 lg:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center">
          {/* Left Column - Text */}
          <div className="text-white lg:col-span-7">
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
              className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              Conquer Florida's{" "}
              <span className="text-primary">Heat</span>{" "}
              in Style
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-lg xl:text-xl text-cream/80 mb-8 max-w-xl lg:max-w-lg"
            >
              Premium sport shoes engineered for humidity, heat, and the active
              Florida lifestyle. From Miami Beach trails to Orlando theme park
              marathons.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12"
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
              className="grid grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary">
                  50K+
                </div>
                <div className="text-sm text-cream/70 mt-1">Happy Floridians</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary">
                  4.9
                </div>
                <div className="text-sm text-cream/70 mt-1">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary">
                  24h
                </div>
                <div className="text-sm text-cream/70 mt-1">FL Delivery</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:col-span-5"
          >
            <NewsletterForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}