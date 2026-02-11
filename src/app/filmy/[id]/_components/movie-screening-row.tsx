import React from "react";
import Link from "next/link";
import { IScreening } from "@/interfaces/IScreenings";
import { Button } from "@/components/ui/button";

type MovieScreeningRowProps = {
  screenings: IScreening[];
};

const MovieScreeningRow: React.FC<MovieScreeningRowProps> = ({
  screenings,
}) => {
  const firstScreening = screenings[0];

  if (!firstScreening) return null;

  const sortedScreenings = [...screenings].sort((a, b) =>
    a.dateTime.localeCompare(b.dateTime)
  );

  return (
    <div className="flex flex-col gap-4 py-6 border-b border-white/10 last:border-b-0">
      <div className="flex flex-col gap-1">
        <span className="text-blood-red text-sm uppercase tracking-widest font-semibold">
          {firstScreening.cinema.city.name}
        </span>

        <Link
          href={`/kina/${firstScreening.cinema.id}`}
          className="text-white text-lg md:text-xl font-bold hover:text-blood-red transition-colors"
        >
          {firstScreening.cinema.name}
        </Link>

        {firstScreening.cinema.street && (
          <span className="text-neutral-400 text-sm">
            {firstScreening.cinema.street}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {sortedScreenings.map((screening) => (
          <Button key={screening.id} variant="secondary" size="sm" asChild>
            <Link
              href={screening.ticketUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kup bilet na seans o ${screening.time}`}
            >
              {screening.time}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MovieScreeningRow;
