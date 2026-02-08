import React from "react";
import Link from "next/link";

type FooterLinkGroup = {
  heading: string;
  links: { href: string; label: string }[];
};

const FOOTER_NAV_GROUPS: FooterLinkGroup[] = [
  {
    heading: "Projekt",
    links: [
      { href: "/o-projekcie", label: "O projekcie" },
      { href: "#seanse", label: "Seanse" },
      { href: "/kina", label: "Kina" },
      { href: "/filmy", label: "Filmy" },
    ],
  },
  {
    heading: "Informacje",
    links: [
      { href: "/jak-to-dziala", label: "Jak to działa" },
      { href: "/kontakt", label: "Kontakt" },
      { href: "/regulamin", label: "Regulamin" },
    ],
  },
];

const FooterNav: React.FC = () => {
  return (
    <nav
      className="grid grid-cols-2 gap-10 md:gap-20 mb-20 md:mb-28"
      aria-label="Nawigacja stopki"
    >
      {FOOTER_NAV_GROUPS.map((group) => (
        <div key={group.heading} className="flex flex-col gap-6">
          <h3 className="text-[11px] uppercase tracking-[0.25em] text-neutral-600 font-medium">
            {group.heading}
          </h3>
          <ul className="flex flex-col gap-4" role="list">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-[0.15em] text-white/60 hover:text-blood-red transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-ink rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterNav;
