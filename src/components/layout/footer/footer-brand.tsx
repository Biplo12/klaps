import React from "react";
import Link from "next/link";

const FOOTER_STATEMENT = "Stare filmy.";
const FOOTER_STATEMENT_ACCENT = "Prawdziwe kino.";
const FOOTER_DESCRIPTION =
  "Ogólnopolski repertuar seansów specjalnych, klasyki i\u00A0filmów spoza głównego obiegu. Jedno miejsce dla wszystkich, którzy szukają czegoś więcej.";

const FooterBrand: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 mb-20 md:mb-28">
      <Link
        href="/"
        className="inline-block self-start text-3xl md:text-4xl font-monoton uppercase text-blood-red drop-shadow-[0_0_1px_rgba(255,255,255,0.3)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-ink rounded-sm"
        aria-label="Klatka – strona główna"
      >
        Klatka
      </Link>

      <div className="flex flex-col gap-1">
        <h2 className="text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.08em] font-oswald font-extralight text-white/90 leading-none">
          {FOOTER_STATEMENT}
        </h2>
        <h2 className="text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.08em] font-oswald font-extralight text-white/40 leading-none">
          {FOOTER_STATEMENT_ACCENT}
        </h2>
      </div>

      <p className="text-sm md:text-base text-neutral-500 max-w-lg leading-relaxed font-light">
        {FOOTER_DESCRIPTION}
      </p>
    </div>
  );
};

export default FooterBrand;
