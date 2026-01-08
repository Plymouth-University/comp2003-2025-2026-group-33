// components/home/legacy/SubscribePlan.tsx
"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function SubscribePlan({
  backgroundImageUrl,
  onSubscribe,
}: {
  backgroundImageUrl?: string;
  onSubscribe?: () => void;
}) {
  return (
    <div
      style={
        backgroundImageUrl
          ? {
              backgroundImage: `url('${backgroundImageUrl}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      className="bg-white"
    >
      <Section bgColor="bg-transparent" className="py-12">
        <div className="rounded-3xl bg-white/80 backdrop-blur border border-slate-200 p-8 md:p-10">
          <div className="text-center space-y-3">
            <p className="font-montserrat font-semibold text-3xl uppercase">
              Pricing Plans
            </p>
            <p className="font-montserrat text-lg">
              Prototype pricing cards — replace with legacy pricing component later.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "$89/mo", perks: ["Games library", "Voucher uploads", "Basic analytics"] },
              { name: "Growth", price: "$149/mo", perks: ["Everything in Starter", "More customisation", "Priority support"] },
              { name: "Enterprise", price: "Let’s talk", perks: ["Custom onboarding", "Dedicated support", "Advanced integrations"] },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
                <p className="font-montserrat font-bold text-xl">{p.name}</p>
                <p className="mt-2 font-montserrat text-3xl font-bold">{p.price}</p>
                <ul className="mt-4 space-y-2 font-montserrat text-sm">
                  {p.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button onClick={onSubscribe} className="w-full">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
