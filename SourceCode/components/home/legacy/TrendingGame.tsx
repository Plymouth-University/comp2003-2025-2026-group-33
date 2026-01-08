// components/home/legacy/TrendingGame.tsx
"use client";

import { Section } from "@/components/layout/Section";

export function TrendingGame() {
  const games = [
    { src: "/assets/images/games/EG---Landing-home_game-1(D).png", alt: "Game 1" },
    { src: "/assets/images/games/EG---Landing-home_game-2(D).png", alt: "Game 2" },
    { src: "/assets/images/games/EG---Landing-home_game-3(D).png", alt: "Game 3" },
    { src: "/assets/images/games/EG---Landing-home_game-4(D).png", alt: "Game 4" },
    { src: "/assets/images/games/EG---Landing-home_game-5(D).png", alt: "Game 5" },
  ];

  return (
    <div className="bg-white">
      <Section className="py-12">
        <div className="space-y-5">
          <p className="font-montserrat font-semibold text-3xl uppercase text-center">
            Trending Games
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((g) => (
              <div
                key={g.alt}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <img src={g.src} alt={g.alt} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
