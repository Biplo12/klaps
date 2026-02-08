import React from "react";
import AboutSection from "../about-section";
import AboutBorderedList from "../about-bordered-list";

const ScopeSection: React.FC = () => {
  return (
    <AboutSection id="zakres" title="Zakres projektu">
      <p className="text-white/80 font-medium">Klatka obejmuje:</p>

      <AboutBorderedList
        items={[
          <>Repertuar kin studyjnych w&nbsp;całej Polsce</>,
          "Wybrane seanse specjalne organizowane przez kina sieciowe",
          "Klasyczne filmy, retrospektywy, przeglądy tematyczne",
          <>Wznowienia i&nbsp;pojedyncze pokazy archiwalne</>,
          <>Wydarzenia kinowe niezwiązane z&nbsp;bieżącymi premierami</>,
        ]}
      />

      <p className="text-white/80 font-medium mt-4">Czego Klatka nie robi?</p>

      <AboutBorderedList
        items={[
          "Nie śledzi codziennego repertuaru premierowego",
          "Nie promuje masowych hitów kinowych",
          "Nie publikuje recenzji ani ocen filmów",
          "Nie tworzy rankingów popularności",
        ]}
        className="border-neutral-800/50 text-neutral-500"
      />

      <p>
        Granica jest prosta: jeśli film można obejrzeć w&nbsp;każdym
        multipleksie przez najbliższe trzy tygodnie – Klatka się nim nie
        zajmuje. Jeśli wyświetlany jest przez jeden wieczór w&nbsp;trzech kinach
        w&nbsp;Polsce – wtedy właśnie Klatka jest potrzebna.
      </p>
    </AboutSection>
  );
};

export default ScopeSection;
