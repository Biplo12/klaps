import React from "react";
import ContentSection from "@/components/common/content-section";
import FaqItem from "../faq-item";

const CinemasSection: React.FC = () => {
  return (
    <ContentSection id="kina-i-miasta" title="Kina i miasta">
      <FaqItem question="Jakie kina są uwzględnione w serwisie?">
        <p>
          Serwis obejmuje kina studyjne oraz wybrane kina sieciowe w&nbsp;całej
          Polsce, które organizują seanse specjalne, pokazy klasyki filmowej lub
          retrospektywy.
        </p>
      </FaqItem>

      <FaqItem question="Czy mogę zaproponować dodanie kina do serwisu?">
        <p>
          Tak. Jeśli znasz kino studyjne, które organizuje seanse specjalne
          i&nbsp;nie jest jeszcze uwzględnione w&nbsp;serwisie, skontaktuj się
          z&nbsp;nami przez stronę kontaktową. Rozpatrzymy każde zgłoszenie.
        </p>
      </FaqItem>

      <FaqItem question="Jak mogę przeglądać kina w moim mieście?">
        <p>
          Możesz wybrać swoje miasto z&nbsp;listy rozwijanej w&nbsp;nagłówku
          strony lub przejść do zakładki Miasta, gdzie znajdziesz pełną listę
          miast z&nbsp;informacjami o&nbsp;dostępnych kinach i&nbsp;seansach.
        </p>
      </FaqItem>

      <FaqItem question="Ile miast jest dostępnych w serwisie?">
        <p>
          Liczba miast stale rośnie. Aktualną listę wszystkich dostępnych miast
          znajdziesz na stronie Miasta.
        </p>
      </FaqItem>
    </ContentSection>
  );
};

export default CinemasSection;
