import React from "react";
import EmptyState from "@/components/common/empty-state";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import ScreeningsSectionCard from "./screenings-section-card";

interface ScreeningsSectionListProps {
  screenings: IScreeningWithMovie[];
}

const ScreeningsSectionList: React.FC<ScreeningsSectionListProps> = ({
  screenings,
}) => {
  if (screenings.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8 list-none">
      {screenings.map((screening) => (
        <li key={screening.movie.id}>
          <ScreeningsSectionCard screening={screening} />
        </li>
      ))}
    </ul>
  );
};

export default ScreeningsSectionList;
