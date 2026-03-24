// app/faq/page.tsx
import type { Metadata } from "next";
import FAQClient from "@/components/faq/FAQClient";

export const metadata: Metadata = {
  title: "FAQ - Engame",
  description: "Frequently Asked Questions",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function FAQPage() {
  return <FAQClient />;
}
