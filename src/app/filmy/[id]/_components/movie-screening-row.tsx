import React from "react";
import Link from "next/link";
import { IScreening } from "@/interfaces/IScreenings";
import { getHoursFromScreenings } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type MovieScreeningRowProps = {
  screenings: IScreening[];
};

const getDateKey = (dateStr: string): string =>
  new Date(dateStr).toISOString().split("T")[0];

const getTimeKey = (dateStr: string): string => {
  const d = new Date(dateStr);
  return `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}`;
};

const groupScreeningsByDate = (
  screenings: IScreening[]
): Map<string, IScreening[]> => {
  const grouped = new Map<string, IScreening[]>();

  for (const screening of screenings) {
    const dateKey = getDateKey(screening.date);
    const existing = grouped.get(dateKey) ?? [];
    existing.push(screening);
    grouped.set(dateKey, existing);
  }

  return grouped;
};

const deduplicateByTime = (screenings: IScreening[]): IScreening[] => {
  const seen = new Set<string>();

  return screenings.filter((screening) => {
    const time = getTimeKey(screening.date);

    if (seen.has(time)) return false;

    seen.add(time);
    return true;
  });
};

const formatDateLabel = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString("pl-PL", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

const MovieScreeningRow: React.FC<MovieScreeningRowProps> = ({
  screenings,
}) => {
  const firstScreening = screenings[0];

  if (!firstScreening) return null;

  const sortedScreenings = [...screenings].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const screeningsByDate = groupScreeningsByDate(sortedScreenings);

  return (
    <div className="flex flex-col gap-4 py-6 border-b border-white/10 last:border-b-0">
      <div className="flex flex-col gap-1">
        {firstScreening.cityName && (
          <span className="text-blood-red text-sm uppercase tracking-widest font-semibold">
            {firstScreening.cityName}
          </span>
        )}
        <Link
          href={`/kina/${firstScreening.cinemaId}`}
          className="text-white text-lg md:text-xl font-bold hover:text-blood-red transition-colors"
        >
          {firstScreening.cinemaName}
        </Link>
        {firstScreening.street && (
          <span className="text-neutral-400 text-sm">
            {firstScreening.street}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {Array.from(screeningsByDate.entries()).map(
          ([dateKey, dateScreenings]) => {
            const uniqueScreenings = deduplicateByTime(dateScreenings);
            const hasSingleDate = screeningsByDate.size === 1;

            return (
              <div key={dateKey} className="flex flex-col gap-1.5">
                {!hasSingleDate && (
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    {formatDateLabel(dateKey)}
                  </span>
                )}
                <div className="flex flex-wrap gap-2">
                  {uniqueScreenings.map((screening) => {
                    const time = getHoursFromScreenings([screening])[0];

                    return (
                      <Button
                        key={screening.id}
                        variant="secondary"
                        size="sm"
                        asChild
                      >
                        <Link
                          href={screening.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Kup bilet na seans ${formatDateLabel(
                            dateKey
                          )} o ${time}`}
                        >
                          {time}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MovieScreeningRow;
