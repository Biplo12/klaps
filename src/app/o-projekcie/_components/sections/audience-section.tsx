import React from "react";
import AboutSection from "../about-section";
import AboutBorderedList from "../about-bordered-list";

const AudienceSection: React.FC = () => {
  return (
    <AboutSection id="grupa-docelowa" title="Grupa docelowa">
      <p>Projekt kierowany jest do:</p>

      <AboutBorderedList
        items={[
          "Osób zainteresowanych kinem klasycznym i historią filmu",
          "Widzów, którzy chcą wychodzić do kina częściej",
          <>Osób, które nie śledzą na bieżąco repertuarów poszczególnych kin</>,
          <>
            Mieszkańców mniejszych miast, gdzie informacje o&nbsp;seansach są
            trudniej dostępne
          </>,
          "Widzów zmęczonych algorytmicznym podawaniem treści",
        ]}
      />
    </AboutSection>
  );
};

export default AudienceSection;
