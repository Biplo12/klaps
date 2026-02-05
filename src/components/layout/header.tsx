"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/hooks";
import Logo from "../common/logo";

const NAV_LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "#seanse", label: "Seanse" },
  { href: "/filmy", label: "Filmy" },
  { href: "/kina", label: "Kina" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

const Header: React.FC = () => {
  const hasScrolled = useHeaderScroll({ threshold: 50 });

  return (
    <header
      className={cn(
        "flex items-center justify-between px-8 w-full z-50 py-4 fixed top-0 left-0 right-0 transition-colors duration-300",
        hasScrolled ? "bg-black" : "bg-transparent"
      )}
      role="banner"
    >
      <Logo />

      <nav
        className="bg-black px-8 py-3 flex items-center gap-8"
        aria-label="Nawigacja główna"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium uppercase tracking-[0.2em] text-white/80 hover:text-blood-red transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
