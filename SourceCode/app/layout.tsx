// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { ModalProvider } from "@/context/ModalContext";
import { AppShell } from "@/components/layout/AppShell";

export const metadata = {
  title: "ENGAME",
  description: "Rebuilt ENGAME marketing website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <ModalProvider>
          <AppShell>{children}</AppShell>
        </ModalProvider>
      </body>
    </html>
  );
}
