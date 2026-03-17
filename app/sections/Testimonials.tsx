"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: "1",
    name: "Sarah Martinez",
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "Finally found shoes that can handle Miami humidity! I've run the Beach Boardwalk every morning for 3 months and they're still perfect. No more sweaty feet!",
    product: "Miami Breeze Runner",
  },
  {
    id: "2",
    name: "Mike Thompson",
    location: "Orlando, FL",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "As a theme park employee, I'm on my feet 10+ hours a day. These shoes are a game changer. My feet stay cool even during the Florida summer heat.",
    product: "Tampa Bay Cruiser",
  },
  {
    id: "3",
    name: "Jennifer Chen",
    location: "Tampa, FL",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "The Everglade Trail Pro handled the Florida Trail like a champ. Even after getting caught in an afternoon thunderstorm, they dried overnight. Amazing!",
    product: "Everglade Trail Pro",
  },
  {
    id: "4",
    name: "Carlos Rodriguez",
    location: "Jacksonville, FL",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "Best golf shoes I've owned. Played 36 holes at TPC Sawgrass in 95° heat and my feet stayed comfortable the entire time. Worth every penny!",
    product: "Gulf Coast Golf Pro",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-sand/30">
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
            Florida Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Loved by{" "}
            <span className="text-primary">Floridians</span>
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Join thousands of happy customers across the Sunshine State who've
            discovered the perfect shoes for Florida living.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-dark/60">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Quote className="w-8 h-8 text-secondary/20" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "text-dark/20"
                    }`}
                  />
                ))}
              </div>

              <p className="text-dark/80 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-secondary/10">
                <span className="text-sm text-secondary font-medium">
                  Purchased: {testimonial.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "50,000+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "15,000+", label: "5-Star Reviews" },
            { value: "30-Day", label: "Free Returns" },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-dark/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}