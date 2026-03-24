// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  const pathname = usePathname();

  const navLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/for-Business", label: "For Business" },
    { href: "/for-gamers", label: "For Gamers" },
    { href: "/blog", label: "Blog" },
    { href: "/our-story", label: "Our Story" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="flex flex-col">
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: "0px" }}
            animate={{ height: "100vh" }}
            exit={{ height: "0px" }}
            transition={{ duration: 0.3 }}
            className="fixed pt-14 w-full h-full bg-white z-20 overflow-auto"
          >
            <div className="container mx-auto p-4 lg:px-36 flex flex-col space-y-4 overflow-auto">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    className={`text-montserrat font-bold text-left text-lg ${
                      pathname === link.href ? "text-yellow-500" : ""
                    }`}
                    onClick={onToggleShowMenu}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
              <button
                onClick={() => {
                  onClickLogin();
                  onToggleShowMenu();
                }}
                className="text-montserrat font-bold text-lg border-2 border-black rounded-lg py-2 hover:opacity-90 hover:shadow-lg"
              >
                Login
              </button>
              <button
                onClick={() => {
                  onClickStartFreeTrial();
                  onToggleShowMenu();
                }}
                className="text-montserrat font-bold text-lg bg-black text-white border-2 border-black rounded-lg py-2 hover:opacity-90 hover:shadow-lg"
              >
                Start Free Trial
              </button>
              <Link href="https://tapmaster.engame.tech">
                <button className="px-2 py-1 text-montserrat font-bold md:text-base bg-black text-white rounded hover:opacity-90 hover:shadow-lg">
                  Start Game
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <header className="z-20 h-14 flex justify-center bg-white border-b">
        <div className="container mx-auto px-4 lg:px-36 py-3 md:py-2 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col justify-center w-36 md:w-28 cursor-pointer">
              <img
                src="/assets/images/logos/logo.png"
                alt="ENGAME"
                width={180}
                height={34}
              />
            </div>
          </Link>

          {/* Mobile Hamburger */}
          <button
            id="burger"
            className="p-2 md:hidden flex items-center justify-center text-montserrat font-bold border border-black rounded-lg"
            onClick={onToggleShowMenu}
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
          </button>

          {/* Desktop Navigation */}
          <div id="nav" className="space-x-1 md:flex hidden items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`px-2 py-1 text-montserrat font-bold md:text-base hover:opacity-70 ${
                    pathname === link.href ? "text-yellow-500" : ""
                  }`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <button
              onClick={onClickLogin}
              className="px-2 py-1 text-montserrat font-bold md:text-base border-2 border-black rounded hover:opacity-90 hover:shadow-lg"
            >
              Login
            </button>
            <button
              onClick={onClickStartFreeTrial}
              className="px-2 py-1 text-montserrat font-bold md:text-base bg-black text-white rounded hover:opacity-90 hover:shadow-lg"
            >
              Start Free Trial
            </button>
            <Link href="https://tapmaster.engame.tech">
              <button className="px-2 py-1 text-montserrat font-bold md:text-base bg-black text-white rounded hover:opacity-90 hover:shadow-lg">
                Start Game
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
