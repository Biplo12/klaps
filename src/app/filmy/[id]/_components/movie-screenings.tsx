"use client";

import React, { useState, useMemo } from "react";
import { IScreening } from "@/interfaces/IScreenings";
import EmptyState from "@/components/common/empty-state";
import MovieScreeningRow from "./movie-screening-row";
import {
  deduplicateScreenings,
  groupScreeningsByCinema,
} from "@/lib/screenings";
import { Button } from "@/components/ui/button";
import { getDateString, formatDateLabel } from "@/lib/utils";

type MovieScreeningsProps = {
  screenings: IScreening[];
};

const getUniqueDates = (screenings: IScreening[]): string[] => {
  const dates = new Set<string>();

  for (const screening of screenings) {
    const dateKey = getDateString(new Date(screening.date));
    dates.add(dateKey);
  }

  return Array.from(dates).sort();
};

const getDefaultDate = (availableDates: string[]): string => {
  const today = getDateString(new Date());

  if (availableDates.includes(today)) return today;

  return availableDates[0] ?? today;
};

const MovieScreenings: React.FC<MovieScreeningsProps> = ({ screenings }) => {
  const deduplicatedScreenings = deduplicateScreenings(screenings);
  const availableDates = useMemo(
    () => getUniqueDates(deduplicatedScreenings),
    [deduplicatedScreenings]
  );

  const [selectedDate, setSelectedDate] = useState<string>(() =>
    getDefaultDate(availableDates)
  );

  const filteredScreenings = useMemo(
    () =>
      deduplicatedScreenings.filter(
        (s) => getDateString(new Date(s.date)) === selectedDate
      ),
    [deduplicatedScreenings, selectedDate]
  );

  const groupedScreenings = useMemo(
    () => groupScreeningsByCinema(filteredScreenings),
    [filteredScreenings]
  );

  if (deduplicatedScreenings.length === 0) {
    return (
      <section className="flex flex-col gap-6">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
          Seanse
        </h2>
        <EmptyState
          headline="Brak nadchodzących seansów"
          description="Aktualnie nie ma zaplanowanych seansów dla tego filmu."
        />
      </section>
    );
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
        Seanse
      </h2>

      <nav
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Wybierz datę seansu"
      >
        {availableDates.map((date) => {
          const isSelected = date === selectedDate;

          return (
            <Button
              key={date}
              variant={isSelected ? "tag-active" : "tag"}
              size="sm"
              role="tab"
              aria-selected={isSelected}
              aria-label={`Pokaż seanse na ${formatDateLabel(date)}`}
              onClick={() => handleDateSelect(date)}
            >
              {formatDateLabel(date)}
            </Button>
          );
        })}
      </nav>

      {groupedScreenings.length === 0 ? (
        <EmptyState
          headline="Brak seansów w tym dniu"
          description="Wybierz inną datę, aby zobaczyć dostępne seanse."
        />
      ) : (
        <div className="flex flex-col border-t border-white/10">
          {groupedScreenings.map((cinemaScreenings) => (
            <MovieScreeningRow
              key={cinemaScreenings[0].cinemaId}
              screenings={cinemaScreenings}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MovieScreenings;
