// components/layout/Section.tsx
import { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
  className?: string;
  bgColor?: string; // e.g. "bg-transparent"
  zIndex?: string; // e.g. "z-30"
}

export function Section({
  children,
  className = "",
  bgColor = "",
  zIndex = "",
}: SectionProps) {
  return (
    <section className={`w-full px-4 md:px-8 lg:px-16 ${bgColor} ${zIndex} ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
