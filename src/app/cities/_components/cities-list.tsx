import React from "react";
import { ICinemaGroup } from "@/interfaces/ICinema";
import CityCard from "./city-card";

interface CitiesListProps {
  cinemaGroups: ICinemaGroup[];
}

const CitiesList: React.FC<CitiesListProps> = ({ cinemaGroups }) => {
  if (cinemaGroups.length === 0) {
    return (
      <p className="text-neutral-500 text-base">Brak miast do wyświetlenia.</p>
    );
  }

  const sortedGroups = [...cinemaGroups].sort((a, b) =>
    a.city.name.localeCompare(b.city.name, "pl"),
  );

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 divide-y divide-neutral-800 md:divide-y-0">
      {sortedGroups.map((group) => (
        <CityCard
          key={group.city.id}
          city={group.city}
          cinemasCount={group.cinemas.length}
        />
      ))}
    </ul>
  );
};

export default CitiesList;
