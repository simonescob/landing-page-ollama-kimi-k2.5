import { z } from "zod";

// Newsletter form schema with Florida zip validation
export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid Florida email"),
  zipCode: z
    .string()
    .regex(
      /^(3[0-9]{4}|7[0-6][0-9]{3})$/,
      "Invalid Florida zip"
    )
    .optional()
    .or(z.literal("")),
  consent: z.boolean().refine((val) => val === true, {
    message: "Required for Florida sun alerts",
  }),
});

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .regex(
      /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      "Invalid phone number format"
    )
    .optional()
    .or(z.literal("")),
  shoeSize: z.string().min(1, "Please select a shoe size"),
  activityType: z.enum(["running", "trail", "beach", "golf", "gym", "walking"]),
  city: z.string().min(1, "Please select a Florida city"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Product size selection schema
export const sizeSelectionSchema = z.object({
  size: z.string().min(1, "Please select a size"),
  quantity: z.number().min(1).max(10),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type SizeSelectionFormData = z.infer<typeof sizeSelectionSchema>;

// Florida cities for dropdown
export const floridaCities = [
  "Miami",
  "Orlando",
  "Tampa",
  "Jacksonville",
  "Fort Lauderdale",
  "St. Petersburg",
  "Hialeah",
  "Port St. Lucie",
  "Cape Coral",
  "Tallahassee",
  "Fort Myers",
  "Pembroke Pines",
  "Hollywood",
  "Gainesville",
  "Miramar",
  "Coral Springs",
  "Clearwater",
  "Miami Gardens",
  "Palm Bay",
  "West Palm Beach",
] as const;

// Shoe sizes
export const shoeSizes = [
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "13",
  "14",
] as const;

// Activity types
export const activityTypes = [
  { value: "running", label: "Road Running" },
  { value: "trail", label: "Trail Running" },
  { value: "beach", label: "Beach Running" },
  { value: "golf", label: "Golf" },
  { value: "gym", label: "Gym Training" },
  { value: "walking", label: "Walking" },
] as const;