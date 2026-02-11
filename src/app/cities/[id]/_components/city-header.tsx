import React from "react";
import { ICity } from "@/interfaces/ICities";
import SectionHeader from "@/components/common/section-header";

interface CityHeaderProps {
  city: ICity;
}

const CityHeader: React.FC<CityHeaderProps> = ({ city }) => {
  return (
    <SectionHeader
      prefix="Miasto"
      title={city.name}
      description={`Kina studyjne i aktualne seanse w ${city.nameDeclinated}.`}
    />
  );
};

export default CityHeader;
