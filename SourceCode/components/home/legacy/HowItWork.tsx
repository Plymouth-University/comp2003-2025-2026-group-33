// components/home/legacy/HowItWork.tsx
"use client";

import { Section } from "@/components/layout/Section";

export function HowItWork({ mediaUrl }: { mediaUrl: string }) {
  return (
    <div className="bg-white">
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <p className="font-montserrat font-bold text-3xl uppercase">
              How it works
            </p>
            <p className="font-montserrat text-lg">
              See how Tap Master turns your campaigns into interactive games that boost engagement and sales.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <video className="w-full h-full" controls>
              <source src={mediaUrl} />
            </video>
          </div>
        </div>
      </Section>
    </div>
  );
}
