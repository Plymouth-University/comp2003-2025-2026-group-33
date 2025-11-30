// components/ui/Input.tsx
"use client";

import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", ...rest }: InputProps) {
  return (
    <div className="mb-3">
      {label && (
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        className={
          "w-full rounded border px-3 py-2 text-sm outline-none transition focus:border-slate-700 focus:ring-1 focus:ring-slate-700 " +
          (error ? "border-red-500" : "border-slate-300") +
          " " +
          className
        }
        {...rest}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
