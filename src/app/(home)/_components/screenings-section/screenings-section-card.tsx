import React from "react";
import Link from "next/link";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { formatGeneres } from "@/lib/utils";
import MoviePoster from "@/components/common/movie-poster";
import MovieMeta from "../hero/movie-meta";
import ScreeningHoverOverlay from "./screening-hover-overlay";
import ScreeningSummary from "./screening-summary";

interface ScreeningsSectionCardProps {
  screening: IScreeningWithMovie;
}

const getScreeningSummary = (screening: IScreeningWithMovie) => {
  const screeningsCount = screening.screenings.length;
  const uniqueCinemas = new Set(
    screening.screenings.map((s) => s.cinemaName).filter(Boolean)
  );
  const cinemasCount = uniqueCinemas.size;

  return { screeningsCount, cinemasCount };
};

const ScreeningsSectionCard: React.FC<ScreeningsSectionCardProps> = ({
  screening,
}) => {
  const formattedGenres = formatGeneres(screening.movie.movies_genres);
  const desc = screening.movie.description?.trim() ?? "";
  const { screeningsCount, cinemasCount } = getScreeningSummary(screening);

  return (
    <article className="group flex flex-col">
      <div className="relative">
        <Link
          href={`/filmy/${screening.movie.id}`}
          className="block overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.02] w-full aspect-2/3 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={`${screening.movie.title} — ${screeningsCount} seansów`}
        >
          <MoviePoster
            posterUrl={screening.movie.posterUrl ?? ""}
            width={220}
            height={330}
            className="w-full h-full object-cover min-w-full min-h-full"
          />

          <ScreeningHoverOverlay />
        </Link>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <h3 className="text-lg font-semibold uppercase tracking-wide">
          <Link
            href={`/filmy/${screening.movie.id}`}
            className="text-white hover:text-blood-red transition-colors line-clamp-2 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {screening.movie.title}
          </Link>
        </h3>

        <MovieMeta
          duration={screening.movie.duration}
          productionYear={screening.movie.productionYear}
          formattedGenres={formattedGenres}
          className="text-sm"
        />

        <p className="text-sm text-white/70 italic line-clamp-2">{desc}</p>

        <ScreeningSummary
          screeningsCount={screeningsCount}
          cinemasCount={cinemasCount}
        />
      </div>
    </article>
  );
};

export default ScreeningsSectionCard;
