// components/home/legacy/HowItWork.tsx
"use client";

import { Section } from "@/components/layout/Section";

export function HowItWork({ mediaUrl }: { mediaUrl: string }) {
  return (
    <Section>
      <div className="flex flex-col md:flex-row space-y-10 md:space-x-6 md:space-y-0 py-10">
        <div className="flex flex-grow flex-col md:max-w-md items-center justify-center md:items-start space-y-6 md:space-y-2">
          <div className="max-w-xs md:h-32 md:w-32 flex justify-center">
            <img
              src="/assets/images/gamer/EG---cat.png"
              width={800}
              height={800}
              alt="cat mascot"
              className="rounded-lg animate-bounce"
            />
          </div>
          <p className="text-center md:text-left font-montserrat font-semibold text-3xl uppercase">
            It&apos;s as simple as 1-2-3!
          </p>
          <hr className="mx-auto md:mx-0 w-1/3 border-black border-2" />
          <p className="text-center md:text-left font-lato text-xl">
            Gamify your business in less than 10 minutes with 3 simple steps!
            And get your products flying off the shelves!
          </p>
        </div>

        <div className="border flex justify-center items-center relative w-full h-96 rounded-3xl bg-black">
          <video autoPlay muted loop src={mediaUrl} className="w-full h-full rounded-3xl" />
        </div>
      </div>
    </Section>
  );
}
