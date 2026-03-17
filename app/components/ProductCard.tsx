"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, ShoppingBag, Heart } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sizeSelectionSchema, type SizeSelectionFormData, shoeSizes } from "@/app/lib/schemas";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isFavorite?: boolean;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SizeSelectionFormData>({
    resolver: zodResolver(sizeSelectionSchema),
    defaultValues: {
      size: "",
      quantity: 1,
    },
  });

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    reset();
    setIsAddedToCart(false);
  };

  const onSubmit = (data: SizeSelectionFormData) => {
    console.log("Added to cart:", { product: product.name, ...data });
    setIsAddedToCart(true);
    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  return (
    <>
      {/* Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group bg-cream rounded-xl overflow-hidden border border-secondary/20 shadow-sm hover:shadow-xl transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Favorite Badge */}
          {product.isFavorite && (
            <div className="absolute top-3 left-3 bg-secondary text-cream text-xs font-bold px-2 py-1 rounded">
              Florida Favorite
            </div>
          )}

          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 p-2 rounded-full bg-cream/90 hover:bg-cream transition-colors"
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isLiked ? "fill-primary text-primary" : "text-dark/60"
              }`}
            />
          </button>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={openModal}
              className="px-6 py-3 bg-cream text-dark font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-white"
            >
              Quick View
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="text-xs font-medium text-secondary mb-1">
            {product.category}
          </div>
          <h3 className="font-bold text-dark text-lg mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "text-dark/20"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-dark/60">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>
            <button
              onClick={openModal}
              className="p-2 rounded-lg bg-secondary/10 hover:bg-secondary hover:text-cream text-secondary transition-colors"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-cream rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-dark/10 hover:bg-dark/20 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-dark" />
              </button>

              <div className="flex flex-col md:flex-row overflow-auto">
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto bg-sand">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {product.isFavorite && (
                    <div className="absolute top-4 left-4 bg-secondary text-cream text-xs font-bold px-2 py-1 rounded">
                      Florida Favorite
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <div className="text-sm font-medium text-secondary mb-2">
                    {product.category}
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-2">
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-primary text-primary"
                              : "text-dark/20"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-dark/60">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-dark/70 mb-4">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-6">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-dark/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-3xl font-bold text-primary mb-6">
                    ${product.price}
                  </div>

                  {/* Size Selection Form */}
                  {isAddedToCart ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 text-center"
                    >
                      <div className="text-secondary font-semibold">
                        Added to cart!
                      </div>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div>
                        <label
                          htmlFor={`size-${product.id}`}
                          className="block text-sm font-medium text-dark mb-2"
                        >
                          Select Size
                        </label>
                        <select
                          {...register("size")}
                          id={`size-${product.id}`}
                          aria-invalid={errors.size ? "true" : "false"}
                          aria-describedby={
                            errors.size ? `size-error-${product.id}` : undefined
                          }
                          className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Choose size</option>
                          {shoeSizes.map((size) => (
                            <option key={size} value={size}>
                              US {size}
                            </option>
                          ))}
                        </select>
                        {errors.size && (
                          <p
                            id={`size-error-${product.id}`}
                            className="mt-1 text-sm text-primary"
                          >
                            {errors.size.message}
                          </p>
                        )}
                      </div>

                      <input
                        {...register("quantity", { valueAsNumber: true })}
                        type="hidden"
                        value={1}
                      />

                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}