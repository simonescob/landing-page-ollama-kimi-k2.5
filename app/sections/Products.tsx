"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/app/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Miami Breeze Runner",
    price: 129.99,
    rating: 4.8,
    reviews: 324,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "Road Running",
    isFavorite: true,
    description:
      "Ultra-breathable mesh upper designed for Miami's humid climate. Lightweight cushioning perfect for beachside boardwalks and city streets.",
    features: [
      "Breathable mesh upper",
      "Moisture-wicking lining",
      "Lightweight EVA midsole",
      "Durable rubber outsole",
    ],
  },
  {
    id: "2",
    name: "Everglade Trail Pro",
    price: 159.99,
    rating: 4.9,
    reviews: 186,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    category: "Trail Running",
    isFavorite: true,
    description:
      "Built for Florida's diverse trail systems. Superior grip for wet terrain and quick-dry materials for unexpected creek crossings.",
    features: [
      "All-terrain outsole",
      "Water-resistant upper",
      "Reinforced toe protection",
      "Quick-lace system",
    ],
  },
  {
    id: "3",
    name: "Tampa Bay Cruiser",
    price: 109.99,
    rating: 4.7,
    reviews: 412,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d17730768a?w=800&q=80",
    category: "Walking",
    isFavorite: false,
    description:
      "Maximum comfort for all-day theme park adventures. Plush cushioning and breathable design keep you comfortable from rope drop to fireworks.",
    features: [
      "Memory foam insole",
      "Breathable knit upper",
      "Slip-resistant outsole",
      "Arch support technology",
    ],
  },
  {
    id: "4",
    name: "Gulf Coast Golf Pro",
    price: 149.99,
    rating: 4.8,
    reviews: 267,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    category: "Golf",
    isFavorite: false,
    description:
      "Spikeless design perfect for Florida's premier courses. Waterproof construction and superior stability for your best game.",
    features: [
      "Waterproof leather upper",
      "Spikeless rubber outsole",
      "Cushioned midsole",
      "Classic styling",
    ],
  },
  {
    id: "5",
    name: "Key West Sand Runner",
    price: 119.99,
    rating: 4.6,
    reviews: 198,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    category: "Beach Running",
    isFavorite: true,
    description:
      "Specialized for soft sand running. Extra-wide base for stability and sand-resistant mesh keeps you moving on Florida's beautiful beaches.",
    features: [
      "Wide stable platform",
      "Sand-resistant mesh",
      "Drainage ports",
      "Quick-dry materials",
    ],
  },
  {
    id: "6",
    name: "Orlando Gym Master",
    price: 99.99,
    rating: 4.7,
    reviews: 356,
    image:
      "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
    category: "Training",
    isFavorite: false,
    description:
      "Versatile training shoe for Florida fitness enthusiasts. Stable platform for lifting and responsive cushioning for HIIT workouts.",
    features: [
      "Flat stable base",
      "Responsive cushioning",
      "Durable upper",
      "Grippy outsole",
    ],
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-cream">
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
            Shop Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Florida's{" "}
            <span className="text-secondary">Favorite</span>{" "}
            Footwear
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            From Miami Beach to the Everglades, our shoes are designed for every
            Florida adventure. Each pair tested by local athletes.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-cream font-semibold rounded-lg transition-colors"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}