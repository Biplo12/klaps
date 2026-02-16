import React from "react";
import ContentSection from "@/components/common/content-section";
import FaqItem from "../faq-item";
import { SITE_DOMAIN } from "@/constants";

const GeneralSection: React.FC = () => {
  return (
    <ContentSection id="ogolne" title="Ogólne">
      <FaqItem question="Czym jest Klatka?">
        <p>
          Klatka to niezależny serwis internetowy, który agreguje informacje
          o&nbsp;seansach specjalnych, klasyce filmowej i&nbsp;retrospektywach
          w&nbsp;kinach studyjnych na terenie całej Polski. Serwis jest dostępny
          pod adresem {SITE_DOMAIN}.
        </p>
      </FaqItem>

      <FaqItem question="Czy korzystanie z serwisu jest bezpłatne?">
        <p>
          Tak. Klatka jest projektem niekomercyjnym i&nbsp;w&nbsp;pełni
          bezpłatnym. Nie wymaga rejestracji, logowania ani podawania
          jakichkolwiek danych osobowych.
        </p>
      </FaqItem>

      <FaqItem question="Kto stoi za projektem Klatka?">
        <p>
          Klatka jest projektem niezależnym, tworzonym z&nbsp;pasji do kina
          studyjnego. Nie jest powiązana z&nbsp;żadnym kinem, dystrybutorem ani
          siecią kinową.
        </p>
      </FaqItem>

      <FaqItem question="Czy muszę się rejestrować, żeby korzystać z serwisu?">
        <p>
          Nie. Serwis nie wymaga rejestracji ani zakładania konta. Wszystkie
          funkcje są dostępne od razu po wejściu na stronę.
        </p>
      </FaqItem>
    </ContentSection>
  );
};

export default GeneralSection;
