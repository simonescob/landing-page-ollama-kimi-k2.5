"use client";

import { motion } from "framer-motion";
import { Sun, Droplets, Wind, Thermometer, Umbrella, Waves } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "UV-Resistant Materials",
    description:
      "Our proprietary fabric technology reflects harmful UV rays while maintaining breathability in direct Florida sunlight.",
    stat: "UPF 50+",
    statLabel: "Sun Protection",
  },
  {
    icon: Droplets,
    title: "Humidity Control",
    description:
      "Advanced moisture-wicking technology keeps your feet dry even when humidity hits 90% on those classic Florida afternoons.",
    stat: "90%",
    statLabel: "Humidity Ready",
  },
  {
    icon: Wind,
    title: "Hurricane-Ready Build",
    description:
      "Reinforced construction tested against Florida's toughest weather. Quick-dry materials for unexpected downpours.",
    stat: "IPX4",
    statLabel: "Water Resistant",
  },
  {
    icon: Thermometer,
    title: "Heat Dissipation",
    description:
      "Ventilated sole design channels hot air away from your feet, keeping you cool when pavement temperatures soar.",
    stat: "-15°F",
    statLabel: "Cooler Feel",
  },
  {
    icon: Umbrella,
    title: "Quick-Dry Technology",
    description:
      "Sudden afternoon shower? No problem. Our materials dry 3x faster than standard athletic shoes.",
    stat: "3x",
    statLabel: "Faster Drying",
  },
  {
    icon: Waves,
    title: "Beach-to-Street",
    description:
      "Sand-resistant design with easy-clean surfaces. Perfect for beach runs and boardwalk strolls.",
    stat: "100%",
    statLabel: "Sand Resistant",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Built for Florida
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Engineered for the{" "}
            <span className="text-primary">Sunshine State</span>
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Every feature designed with Florida's unique climate challenges in
            mind. From Miami humidity to Tampa Bay afternoon storms.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-cream border border-secondary/20 rounded-xl p-6 hover:shadow-xl hover:border-secondary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-cream transition-colors"
                  >
                    <Icon className="w-6 h-6 text-secondary group-hover:text-cream transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-dark/70 text-sm mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-primary">
                        {feature.stat}
                      </span>
                      <span className="text-xs text-dark/50 uppercase tracking-wide">
                        {feature.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full text-secondary font-medium"
          >
            <Umbrella className="w-5 h-5" />
            <span>Hurricane-ready shipping on all orders</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}