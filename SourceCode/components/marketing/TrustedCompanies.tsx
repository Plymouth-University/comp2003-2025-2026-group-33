// components/marketing/TrustedCompanies.tsx
"use client";

import Image from "next/image";

const companies = [
  {
    name: "Tealive",
    src: "/assets/images/partners/company-tealive.png",
  },
  {
    name: "Fave",
    src: "/assets/images/partners/company-fave.png",
  },
  {
    name: "Herbalife",
    src: "/assets/images/partners/company-herbalife.png",
  },
  {
    name: "Texas Chicken",
    src: "/assets/images/partners/company-texaschicken.png",
  },
  {
    name: "Packtica",
    src: "/assets/images/partners/company-packtica.png",
  },
];

export function TrustedCompanies() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      {/* Heading */}
      <h2 className="text-center font-montserrat font-extrabold text-2xl md:text-3xl tracking-wide">
        TRUSTED BY THE WORLD&apos;S LEADING COMPANIES
      </h2>

      {/* Underline */}
      <div className="mt-3 h-[3px] w-32 bg-black mx-auto" />

      {/* Logo row */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
        {companies.map((company) => (
          <div
            key={company.name}
            className="
              flex items-center justify-center
              w-48 h-32 md:w-56 md:h-36
              bg-[#f4f4f4]
              rounded-xl
              overflow-hidden
              transition-transform transition-colors duration-200
              grayscale hover:grayscale-0
              hover:bg-white hover:shadow-lg
            "
          >
            <Image
              src={company.src}
              alt={company.name}
              width={220}
              height={120}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
