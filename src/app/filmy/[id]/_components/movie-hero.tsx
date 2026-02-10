import React from "react";
import { IMovie } from "@/interfaces/IMovies";
import { formatGeneres, formatDuration } from "@/lib/utils";
import MoviePoster from "@/components/common/movie-poster";
import NoMoviePoster from "@/components/common/no-movie-poster";

type MovieHeroProps = {
  movie: IMovie;
};

type DetailItem = {
  label: string;
  value: string;
};

const formatPremiereDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const getDetails = (movie: IMovie): DetailItem[] => {
  const allGenres = movie.movies_genres.map((g) => g.genre.name).join(", ");

  return [
    { label: "Rok produkcji", value: movie.productionYear.toString() },
    ...(movie.duration > 0
      ? [{ label: "Czas trwania", value: formatDuration(movie.duration) }]
      : []),
    ...(allGenres ? [{ label: "Gatunek", value: allGenres }] : []),
    ...(movie.language
      ? [{ label: "Język", value: movie.language.toUpperCase() }]
      : []),
    ...(movie.worldPremiereDate
      ? [
          {
            label: "Premiera światowa",
            value: formatPremiereDate(movie.worldPremiereDate),
          },
        ]
      : []),
    ...(movie.polishPremiereDate
      ? [
          {
            label: "Premiera w Polsce",
            value: formatPremiereDate(movie.polishPremiereDate),
          },
        ]
      : []),
  ];
};

const MovieHero: React.FC<MovieHeroProps> = ({ movie }) => {
  const formattedGenres = formatGeneres(movie.movies_genres);
  const formattedDuration = formatDuration(movie.duration);
  const details = getDetails(movie);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full max-w-[280px] mx-auto md:mx-0 md:w-80 shrink-0">
          <div className="aspect-2/3 overflow-hidden border border-white/10">
            {movie.posterUrl ? (
              <MoviePoster
                posterUrl={movie.posterUrl}
                width={320}
                height={480}
                className="w-full h-full object-cover"
              />
            ) : (
              <NoMoviePoster className="w-full h-full" />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:py-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide leading-tight">
              {movie.title}
            </h1>

            {movie.titleOriginal && movie.titleOriginal !== movie.title && (
              <p className="text-neutral-500 text-base md:text-xl italic">
                {movie.titleOriginal}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-400 text-base md:text-lg">
            <span>{movie.productionYear}</span>
            {movie.duration > 0 && (
              <>
                <span className="text-neutral-700">|</span>
                <span>{formattedDuration}</span>
              </>
            )}
            {formattedGenres && (
              <>
                <span className="text-neutral-700">|</span>
                <span>{formattedGenres}</span>
              </>
            )}
          </div>

          {movie.description && (
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl">
              {movie.description}
            </p>
          )}
        </div>
      </div>

      <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="flex flex-col gap-1 border-l-4 border-l-blood-red pl-4"
          >
            <dt className="text-neutral-500 text-sm uppercase tracking-widest">
              {detail.label}
            </dt>
            <dd className="text-white text-base md:text-lg">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default MovieHero;
