import React from "react";
import HowItWorksStep from "./how-it-works-step";

const STEPS = [
  {
    number: "01",
    title: "Zbieramy repertuar",
    description:
      "Dane pobieramy z publicznych źródeł kin w całej Polsce. Aktualizujemy je regularnie.",
  },
  {
    number: "02",
    title: "Filtrujemy seanse",
    description:
      "Skupiamy się na pokazach specjalnych, klasyce, retrospektywach i wznowieniach. Na filmach, które łatwo przeoczyć wśród premier.",
  },
  {
    number: "03",
    title: "Pokazujemy w jednym miejscu",
    description:
      "Wszystkie seanse trafiają na jedną stronę. Filtrujesz po mieście, gatunku lub dacie i znajdujesz to, co Cię interesuje.",
  },
];

const HowItWorksList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      {STEPS.map((step) => (
        <HowItWorksStep
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
};

export default HowItWorksList;
