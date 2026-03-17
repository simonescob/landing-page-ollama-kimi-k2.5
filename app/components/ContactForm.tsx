"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData, floridaCities, shoeSizes, activityTypes } from "@/app/lib/schemas";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      shoeSize: "",
      activityType: undefined,
      city: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Contact form submitted:", data);
      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    reset();
    setIsSuccess(false);
    setError(null);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-cream border border-secondary/20 rounded-xl p-8 text-center max-w-2xl mx-auto"
      >
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-dark mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-dark/70 mb-6">
          Thank you for reaching out. Our Florida team will get back to you within 24 hours with personalized recommendations.
        </p>
        <button
          onClick={resetForm}
          className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cream border border-secondary/20 rounded-xl p-6 md:p-8 shadow-lg max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-dark mb-2 text-center">
        Get Personalized Recommendations
      </h3>
      <p className="text-dark/70 text-center mb-6">
        Tell us about your Florida activities and we'll recommend the perfect shoes
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="John Smith"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-primary">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-dark mb-1">
              Email <span className="text-primary">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              id="contact-email"
              placeholder="john@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-primary">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone and City Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
              Phone Number
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="(305) 555-0123"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-primary">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-dark mb-1">
              Florida City <span className="text-primary">*</span>
            </label>
            <select
              {...register("city")}
              id="city"
              aria-invalid={errors.city ? "true" : "false"}
              aria-describedby={errors.city ? "city-error" : undefined}
              className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="">Select your city</option>
              {floridaCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p id="city-error" className="mt-1 text-sm text-primary">
                {errors.city.message}
              </p>
            )}
          </div>
        </div>

        {/* Shoe Size and Activity Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="shoeSize" className="block text-sm font-medium text-dark mb-1">
              Shoe Size <span className="text-primary">*</span>
            </label>
            <select
              {...register("shoeSize")}
              id="shoeSize"
              aria-invalid={errors.shoeSize ? "true" : "false"}
              aria-describedby={errors.shoeSize ? "shoeSize-error" : undefined}
              className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="">Select size</option>
              {shoeSizes.map((size) => (
                <option key={size} value={size}>
                  US {size}
                </option>
              ))}
            </select>
            {errors.shoeSize && (
              <p id="shoeSize-error" className="mt-1 text-sm text-primary">
                {errors.shoeSize.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="activityType" className="block text-sm font-medium text-dark mb-1">
              Activity Type <span className="text-primary">*</span>
            </label>
            <select
              {...register("activityType")}
              id="activityType"
              aria-invalid={errors.activityType ? "true" : "false"}
              aria-describedby={errors.activityType ? "activityType-error" : undefined}
              className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="">Select activity</option>
              {activityTypes.map((activity) => (
                <option key={activity.value} value={activity.value}>
                  {activity.label}
                </option>
              ))}
            </select>
            {errors.activityType && (
              <p id="activityType-error" className="mt-1 text-sm text-primary">
                {errors.activityType.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            placeholder="Tell us about your typical Florida activities, terrain preferences, or any specific requirements..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-primary">
              {errors.message.message}
            </p>
          )}
        </div>

        {error && (
          <p className="text-sm text-primary bg-primary/10 p-3 rounded-lg">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get Recommendations
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}