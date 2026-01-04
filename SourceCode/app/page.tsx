// app/page.tsx
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Partners } from "@/components/marketing/Partners";
import { CTA } from "@/components/marketing/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Partners />
      <CTA />
    </>
  );
}

// Code For Homepage 
