// components/marketing/Slideshow.tsx
"use client";

import { Children, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideshowProps {
  activeKey: number;
  page?: number;      // kept for compatibility, not strictly needed
  direction?: number; // direction for slide animation: 1 for forward, -1 for backward
  children: ReactNode;
}

export function Slideshow({ activeKey, direction = 1, children }: SlideshowProps) {
  const items = Children.toArray(children);

  // Animation variants for sliding effect with absolute positioning
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative' as const,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
    }),
  };

  return (
    <div className="relative w-full">
      <div className="relative min-h-[450px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeKey}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 250, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            {items[activeKey]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
