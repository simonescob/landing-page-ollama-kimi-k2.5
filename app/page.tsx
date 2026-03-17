import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/sections/Hero";
import { Features } from "@/app/sections/Features";
import { Products } from "@/app/sections/Products";
import { Testimonials } from "@/app/sections/Testimonials";
import { Contact } from "@/app/sections/Contact";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
