import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FloridaFit | Premium Sport Shoes for Florida's Climate",
  description:
    "High-performance sport shoes engineered for Florida's heat and humidity. Shop running, trail, beach, and golf shoes designed for the Sunshine State.",
  keywords: [
    "sport shoes Florida",
    "running shoes Miami",
    "beach running shoes",
    "Florida athletic footwear",
    "humidity resistant shoes",
    "trail running Florida",
  ],
  authors: [{ name: "FloridaFit" }],
  creator: "FloridaFit",
  publisher: "FloridaFit",
  metadataBase: new URL("https://floridafit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://floridafit.com",
    siteName: "FloridaFit",
    title: "FloridaFit | Premium Sport Shoes for Florida's Climate",
    description:
      "High-performance sport shoes engineered for Florida's heat and humidity. Shop running, trail, beach, and golf shoes designed for the Sunshine State.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "FloridaFit - Premium Sport Shoes for Florida's Climate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FloridaFit | Premium Sport Shoes for Florida's Climate",
    description:
      "High-performance sport shoes engineered for Florida's heat and humidity. Shop running, trail, beach, and golf shoes designed for the Sunshine State.",
    images: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80",
    ],
    creator: "@floridafit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
