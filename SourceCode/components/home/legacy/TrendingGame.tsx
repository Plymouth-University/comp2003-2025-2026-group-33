// components/home/legacy/TrendingGame.tsx
"use client";

import { Section } from "@/components/layout/Section";

export function TrendingGame() {
  const games = [
    { src: "/assets/images/games/EG---Landing-home_game-1(D).png", name: "Legendary moai" },
    { src: "/assets/images/games/EG---Landing-home_game-2(D).png", name: "The largest one" },
    { src: "/assets/images/games/EG---Landing-home_game-3(D).png", name: "Deep blue sea" },
    { src: "/assets/images/games/EG---Landing-home_game-4(D).png", name: "Scissors rock paper" },
    { src: "/assets/images/games/EG---Landing-home_game-5(D).png", name: "Super fast food" },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/backgrounds/EG---bg-2.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Section bgColor="bg-transparent">
        <div className="flex flex-col items-center py-10">
          <p className="text-center font-montserrat font-semibold text-3xl uppercase z-10 py-2 mt-7">
            Trending Games
          </p>
          <hr className="mb-10 mx-auto w-2/6 md:w-1/6 text-center border-black border-2" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full pb-10">
            {games.map((g) => (
              <div key={g.name} className="flex flex-col items-center">
                <div className="h-44 flex items-center justify-center">
                  <img src={g.src} alt={g.name} className="h-full w-auto" />
                </div>
                <p className="font-montserrat font-bold text-lg mt-2 text-center">{g.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
