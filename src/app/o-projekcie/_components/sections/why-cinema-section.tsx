import React from "react";
import AboutSection from "../about-section";

const WhyCinemaSection: React.FC = () => {
  return (
    <AboutSection
      id="dlaczego-kino"
      title="Dlaczego kino i dlaczego stare filmy?"
    >
      <p>
        Projekt wychodzi z&nbsp;założenia, że kino jako medium zostało stworzone
        z&nbsp;myślą o&nbsp;wspólnym oglądaniu na dużym ekranie. Klasyczne
        filmy, filmy archiwalne oraz dzieła z&nbsp;historii kina często tracą
        swój kontekst i&nbsp;siłę oddziaływania, gdy oglądane są wyłącznie
        w&nbsp;warunkach domowych.
      </p>

      <p>
        Klatka nie jest projektem „przeciwko streamingowi". Jest projektem
        przypominającym, że kino jako przestrzeń nadal ma sens – szczególnie
        w&nbsp;przypadku filmów, które powstały z&nbsp;myślą o&nbsp;kinowej
        sali, odpowiedniej skali obrazu i&nbsp;skupionej uwadze widza.
      </p>

      <p>
        Promowanie powrotów starych filmów na duży ekran to również forma dbania
        o&nbsp;pamięć kulturową. Bez takich inicjatyw historia kina stopniowo
        przestaje być doświadczeniem, a&nbsp;staje się jedynie archiwum.
      </p>
    </AboutSection>
  );
};

export default WhyCinemaSection;
