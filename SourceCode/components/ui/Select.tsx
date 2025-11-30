// components/ui/Select.tsx
"use client";

import type { SelectHTMLAttributes, ReactNode } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children: ReactNode;
}

export function Select({ label, error, children, className = "", ...rest }: SelectProps) {
  return (
    <div className="mb-3">
      {label && (
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <select
        className={
          "w-full rounded border px-3 py-2 text-sm outline-none transition focus:border-slate-700 focus:ring-1 focus:ring-slate-700 " +
          (error ? "border-red-500" : "border-slate-300") +
          " " +
          className
        }
        {...rest}
      >
        {children}
      </select>
      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export function Option({ children, ...rest }: { children: ReactNode } & React.OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...rest}>{children}</option>;
}
