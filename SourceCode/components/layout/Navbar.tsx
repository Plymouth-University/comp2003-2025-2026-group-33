// components/layout/Navbar.tsx
"use client";

interface NavbarProps {
  isOpen: boolean;
  onClickLogin: () => void;
  onClickStartFreeTrial: () => void;
  onToggleShowMenu: () => void;
}

export function Navbar({
  isOpen,
  onClickLogin,
  onClickStartFreeTrial,
  onToggleShowMenu,
}: NavbarProps) {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="font-montserrat text-xl font-extrabold">
          ENGAME
        </div>
        <div className="hidden gap-4 md:flex">
          <button onClick={onClickLogin} className="text-sm underline">
            Log in
          </button>
          <button
            onClick={onClickStartFreeTrial}
            className="rounded bg-black px-4 py-2 text-sm font-semibold text-white"
          >
            Start Free Trial
          </button>
        </div>
        <button
          onClick={onToggleShowMenu}
          className="block md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {/* Simple mobile dropdown placeholder */}
      {isOpen && (
        <div className="border-t bg-white px-4 py-3 md:hidden">
          <button
            onClick={onClickLogin}
            className="block w-full py-1 text-left text-sm"
          >
            Log in
          </button>
          <button
            onClick={onClickStartFreeTrial}
            className="mt-2 block w-full rounded bg-black px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Start Free Trial
          </button>
        </div>
      )}
    </header>
  );
}
