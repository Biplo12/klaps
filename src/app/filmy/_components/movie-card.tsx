import React from "react";
import Link from "next/link";
import { IMovie } from "@/interfaces/IMovies";
import { formatGeneres, formatDuration } from "@/lib/utils";
import MoviePoster from "@/components/common/movie-poster";
import NoMoviePoster from "@/components/common/no-movie-poster";
import ScreeningHoverOverlay from "@/app/(home)/_components/screenings-section/screening-hover-overlay";
import MovieMeta from "@/app/(home)/_components/hero/movie-meta";
import ScreeningSummary from "@/app/(home)/_components/screenings-section/screening-summary";
import { getScreeningSummary } from "@/lib/screenings";

interface MovieCardProps {
  movie: IMovie;
  screeningsCount?: number | null;
  cinemasCount?: number | null;
  showDescription?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  screeningsCount,
  cinemasCount,
  showDescription = false,
}) => {
  const formattedGenres = formatGeneres(movie.movies_genres);
  const desc = movie.description?.trim() ?? "";

  return (
    <article className="group flex flex-col">
      <div className="relative">
        <Link
          href={`/filmy/${movie.id}`}
          className="block overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.02] w-full aspect-2/3 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={`${movie.title} — ${movie.duration} min`}
        >
          <MoviePoster
            posterUrl={movie.posterUrl ?? ""}
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
            href={`/filmy/${movie.id}`}
            className="text-white hover:text-blood-red transition-colors line-clamp-2 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {movie.title}
          </Link>
        </h3>

        <MovieMeta
          duration={movie.duration}
          productionYear={movie.productionYear}
          formattedGenres={formattedGenres}
          className="text-sm"
        />

        {showDescription && (
          <p className="text-sm text-white/70 italic line-clamp-2">{desc}</p>
        )}

        {screeningsCount && cinemasCount && (
          <ScreeningSummary
            screeningsCount={screeningsCount}
            cinemasCount={cinemasCount}
          />
        )}
      </div>
    </article>
  );
};

export default MovieCard;
