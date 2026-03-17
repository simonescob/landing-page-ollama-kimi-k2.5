"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/app/lib/schemas";

interface UseNewsletterReturn {
  form: ReturnType<typeof useForm<NewsletterFormData>>;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  onSubmit: (data: NewsletterFormData) => Promise<void>;
  resetForm: () => void;
}

export function useNewsletter(): UseNewsletterReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      zipCode: "",
      consent: false,
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate success
      console.log("Newsletter signup:", data);
      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    form.reset();
    setIsSuccess(false);
    setError(null);
  };

  return {
    form,
    isSubmitting,
    isSuccess,
    error,
    onSubmit,
    resetForm,
  };
}