// components/home/legacy/PartnerContent.tsx
"use client";

import { Section } from "@/components/layout/Section";

export function PartnerContent({ backgroundImage = false }: { backgroundImage?: boolean }) {
  return (
    <div
      style={
        backgroundImage
          ? {
              backgroundImage: "url('/assets/images/backgrounds/EG---bg-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      className="bg-white"
    >
      <Section bgColor="bg-transparent" className="py-10">
        <div className="flex flex-col items-center gap-5">
          <p className="font-montserrat font-semibold text-xl uppercase text-center">
            Trusted by brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { src: "/assets/images/partners/company-tealive.png", alt: "Tealive" },
              { src: "/assets/images/partners/company-texaschicken.png", alt: "Texas Chicken" },
              { src: "/assets/images/partners/company-herbalife.png", alt: "Herbalife" },
              { src: "/assets/images/partners/company-packtica.png", alt: "Packtica" },
              { src: "/assets/images/partners/company-fave.png", alt: "Fave" },
            ].map((p) => (
              <img key={p.alt} src={p.src} alt={p.alt} className="h-10 w-auto object-contain" />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
