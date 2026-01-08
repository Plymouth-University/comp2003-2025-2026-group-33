// components/home/legacy/HowWork.tsx
"use client";

import { Section } from "@/components/layout/Section";

export function HowWork() {
  return (
    <div className="bg-white">
      <Section className="py-12">
        <div className="space-y-6">
          <p className="font-montserrat font-semibold text-3xl uppercase text-center">
            Build your campaign in minutes
          </p>
          <div className="flex justify-center">
            <img
              src="/assets/images/games/engame_step123.gif"
              alt="Steps"
              className="max-w-full rounded-xl border border-slate-200"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
