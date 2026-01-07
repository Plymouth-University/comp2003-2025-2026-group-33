// app/page.tsx
import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Home - Engame",
  description: "Sell More With Tap Master",
};

export default function HomePage() {
  return <HomeClient />;
}

// Code For Homepage 
