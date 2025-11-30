// hooks/useMediaQuery.ts
"use client";

import { useEffect, useState } from "react";

export default function useMediaQuery(query: string): boolean {
  const getMatch = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false; // SSR safe default
  };

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handler = () => setMatches(mediaQuery.matches);
    handler(); // run once on mount

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
