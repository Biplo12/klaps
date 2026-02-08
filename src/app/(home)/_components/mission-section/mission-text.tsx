import React from "react";
import { ReadMoreLink } from "@/components/ui/read-more-link";

const MissionText: React.FC = () => {
  return (
    <div className="flex items-center lg:py-16">
      <div className="flex flex-col gap-8 max-w-lg">
        <h2
          id="mission-title"
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-none"
        >
          Po co jest Klatka
        </h2>

        <div className="flex flex-col gap-6 text-neutral-400 text-base md:text-lg leading-relaxed">
          <p>
            Klatka to ogólnopolski repertuar seansów specjalnych, klasyki
            i&nbsp;filmów spoza głównego obiegu.
          </p>

          <p>
            Zbieramy program kin studyjnych oraz wybrane seanse z&nbsp;większych
            sieci kinowych&nbsp;— wszędzie tam, gdzie stare filmy wracają na
            duży ekran.
          </p>

          <p>
            Pomagamy znaleźć pokazy, które łatwo przegapić: retrospektywy,
            przeglądy, wznowienia.
          </p>

          <p className="text-white font-medium tracking-wide">
            Jedno miejsce. Kina w&nbsp;całej Polsce.
          </p>
        </div>

        <ReadMoreLink
          href="/o-projekcie"
          label="Czytaj więcej"
          ariaLabel="Przeczytaj pełny opis projektu Klatka"
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default MissionText;
