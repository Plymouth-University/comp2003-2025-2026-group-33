// components/layout/Footer.tsx
"use client";

export function Footer() {
  return (
    <footer className="w-full border-t bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-600 md:flex-row">
        <span>© {new Date().getFullYear()} ENIDIA. All rights reserved.</span>
        <span>Rebuilt for COMP2003 coursework.</span>
      </div>
    </footer>
  );
}
