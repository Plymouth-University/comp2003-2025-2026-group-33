// components/home/legacy/BrandCarousel.tsx
"use client";

import { Section } from "@/components/layout/Section";

export function BrandCarousel() {
  const items = [
    { src: "/assets/images/carousel/TeaLive.png", alt: "Tealive" },
    { src: "/assets/images/carousel/TexasChicken.png", alt: "Texas Chicken" },
    { src: "/assets/images/carousel/HerbaLife.png", alt: "Herbalife" },
    { src: "/assets/images/carousel/Fave.png", alt: "Fave" },
  ];

  return (
    <div className="bg-white">
      <Section className="py-8">
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max items-center">
            {items.map((i) => (
              <div key={i.alt} className="shrink-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src={i.src} alt={i.alt} className="h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
