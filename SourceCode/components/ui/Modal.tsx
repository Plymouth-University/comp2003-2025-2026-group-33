// components/ui/Modal.tsx
"use client";

import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, title, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h2 className="font-montserrat text-xl font-bold">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-800"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
