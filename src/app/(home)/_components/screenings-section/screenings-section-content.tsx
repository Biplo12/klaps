"use client";

import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { ICity } from "@/interfaces/ICities";
import { useScreeningDates } from "@/hooks/use-screening-dates";
import { useScreeningGenres } from "@/hooks/use-screening-genres";
import { useCityParam } from "@/hooks/use-city-param";
import ScreeningsSectionHeader from "./screenings-section-header";
import ScreeningsSectionList from "./screenings-section-list";

interface ScreeningsSectionContentProps {
  screenings: IScreeningWithMovie[];
  cities: ICity[];
}

const ScreeningsSectionContent: React.FC<ScreeningsSectionContentProps> = ({
  screenings,
  cities,
}) => {
  const { dates, activeDate } = useScreeningDates(screenings);
  const { genres } = useScreeningGenres(screenings);
  const { selectedCityId } = useCityParam();

  return (
    <div className="flex flex-col gap-10">
      <ScreeningsSectionHeader cities={cities} dates={dates} genres={genres} />
      <ScreeningsSectionList
        screenings={screenings}
        selectedDate={activeDate}
        selectedCityId={selectedCityId}
      />
    </div>
  );
};

export default ScreeningsSectionContent;
