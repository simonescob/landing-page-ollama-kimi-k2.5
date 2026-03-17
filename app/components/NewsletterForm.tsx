"use client";

import { motion } from "framer-motion";
import { Sun, CheckCircle, Loader2 } from "lucide-react";
import { useNewsletter } from "@/app/hooks/useNewsletter";

export function NewsletterForm() {
  const { form, isSubmitting, isSuccess, error, onSubmit, resetForm } =
    useNewsletter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-cream border border-secondary/20 rounded-xl p-6 text-center"
      >
        <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-dark mb-2">
          Welcome to the Florida Fit Club!
        </h3>
        <p className="text-dark/70 mb-4">
          You'll receive exclusive Florida running tips and early access to
          new releases.
        </p>
        <button
          onClick={resetForm}
          className="text-primary hover:text-primary-dark font-medium underline"
        >
          Sign up another email
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cream border border-secondary/20 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <Sun className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-secondary">
          Florida Sun Alerts
        </span>
      </div>

      <h3 className="text-xl font-bold text-dark mb-2">
        Join the Florida Fit Club
      </h3>
      <p className="text-dark/70 text-sm mb-4">
        Get exclusive deals on heat-ready footwear and local trail
        recommendations.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your email"
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

        <div>
          <label htmlFor="zipCode" className="sr-only">
            Florida ZIP code (optional)
          </label>
          <input
            {...register("zipCode")}
            type="text"
            id="zipCode"
            placeholder="Florida ZIP code (optional)"
            aria-invalid={errors.zipCode ? "true" : "false"}
            aria-describedby={errors.zipCode ? "zipcode-error" : undefined}
            className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          {errors.zipCode && (
            <p id="zipcode-error" className="mt-1 text-sm text-primary">
              {errors.zipCode.message}
            </p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <input
            {...register("consent")}
            type="checkbox"
            id="consent"
            aria-invalid={errors.consent ? "true" : "false"}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 w-4 h-4 rounded border-secondary/30 text-primary focus:ring-primary"
          />
          <label htmlFor="consent" className="text-sm text-dark/70">
            I agree to receive Florida sun alerts and exclusive offers. You can
            unsubscribe at any time.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="text-sm text-primary">
            {errors.consent.message}
          </p>
        )}

        {error && (
          <p className="text-sm text-primary bg-primary/10 p-3 rounded-lg">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join the Club"
          )}
        </button>
      </form>
    </motion.div>
  );
}