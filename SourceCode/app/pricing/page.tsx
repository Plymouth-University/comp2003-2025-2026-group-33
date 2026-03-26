// app/pricing/page.tsx
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SubscribePlan } from "@/components/home/legacy/SubscribePlan";
import { TrustedCompanies } from "@/components/marketing/TrustedCompanies";

export const metadata: Metadata = {
  title: "Pricing - Engame",
  description: "Sell More With Tap Master",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function PricingPage() {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/images/backgrounds/EG---bg.jpg")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative">
        <Section bgColor="bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center space-y-2">
              <p className="text-center md:text-left font-montserrat font-extrabold pb-1 text-4xl">
                Start Your Free Trial Today!
              </p>
              <p className="text-center md:text-left font-montserrat pb-4 text-xl">
                Enjoy Unlimited Access to All Premium Features for up to{" "}
                <span className="font-bold">30 days!</span> Revolutionise your
                Business today with Tap Master!
              </p>
              <p className="w-full md:w-72 px-5 py-2 border border-gray-100 bg-gray-100 text-black rounded-full font-montserrat font-bold text-center">
                Subscribe your plan now!
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center md:flex-1 md:justify-end max-w-lg">
                <img
                  src="/assets/images/pricing/EG---Landing-pricing_top-main(D).png"
                  width={800}
                  height={800}
                  alt="pricing"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="bg-white py-8" />

      <SubscribePlan backgroundImage backgroundImageUrl="/assets/images/backgrounds/EG---bg-2.jpg" />

      <TrustedCompanies />
    </div>
  );
}