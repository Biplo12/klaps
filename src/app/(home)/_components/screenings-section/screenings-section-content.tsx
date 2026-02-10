"use client";

import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { ICity } from "@/interfaces/ICities";
import { IGenre } from "@/interfaces/IMovies";
import {
  ScreeningsTransitionProvider,
  useScreeningsTransition,
} from "@/contexts/screenings-transition-context";
import { cn } from "@/lib/utils";
import EmptyState from "@/components/common/empty-state";
import ScreeningsSectionHeader from "./screenings-section-header";
import ScreeningsSectionCta from "./screenings-section-cta";
import MoviesGrid from "@/app/filmy/_components/movies-grid";

interface ScreeningsSectionContentProps {
  screenings: IScreeningWithMovie[];
  cities: ICity[];
  genres: IGenre[];
}

const ScreeningsSectionContentInner: React.FC<
  ScreeningsSectionContentProps
> = ({ screenings, cities, genres }) => {
  const { isPending } = useScreeningsTransition();

  const movies = screenings.map((screening) => screening.movie);

  return (
    <div
      className={cn(
        "flex flex-col gap-10 transition-opacity duration-200",
        isPending && "opacity-50 pointer-events-none"
      )}
    >
      <ScreeningsSectionHeader cities={cities} genres={genres} />
      {screenings.length === 0 && <EmptyState />}

      <MoviesGrid
        screenings={screenings}
        movies={movies}
        showDescription={true}
      />

      <ScreeningsSectionCta />
    </div>
  );
};

const ScreeningsSectionContent: React.FC<ScreeningsSectionContentProps> = (
  props
) => (
  <ScreeningsTransitionProvider>
    <ScreeningsSectionContentInner {...props} />
  </ScreeningsTransitionProvider>
);

export default ScreeningsSectionContent;
