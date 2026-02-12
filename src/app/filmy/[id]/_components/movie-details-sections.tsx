import React from "react";
import { IMovie } from "@/interfaces/IMovies";
import { formatDatePL, formatDuration, formatNames } from "@/lib/utils";
import MovieDetailsGroup from "./movie-details-group";
import { MovieDetailItem } from "./movie-details-types";

type MovieDetailsSectionsProps = {
  movie: IMovie;
};

const item = (
  label: string,
  value: string | null | undefined
): MovieDetailItem | null => (value ? { label, value } : null);

const compact = (items: (MovieDetailItem | null)[]): MovieDetailItem[] =>
  items.filter((i): i is MovieDetailItem => i !== null);

const MovieDetailsSections: React.FC<MovieDetailsSectionsProps> = ({
  movie,
}) => {
  const directors = formatNames(movie.directors);
  const actors = formatNames(movie.actors);
  const scriptwriters = formatNames(movie.scriptwriters ?? movie.screenwriters);
  const countries = formatNames(movie.countries ?? movie.countryOfOrigin);
  const genres = formatNames(movie.genres);

  const credits = compact([
    item("Rezyser", directors),
    item("Aktorzy", actors),
    item("Autorzy scenariusza", scriptwriters),
  ]);

  const movieInfo = compact([
    item("Rok produkcji", movie.productionYear.toString()),
    item(
      "Czas trwania",
      movie.duration ? formatDuration(movie.duration) : null
    ),
    item("Gatunek", genres),
    item("Kraj pochodzenia", countries),
    item("Jezyk", movie.language?.toUpperCase()),
    item(
      "Premiera swiatowa",
      movie.worldPremiereDate ? formatDatePL(movie.worldPremiereDate) : null
    ),
    item(
      "Premiera w Polsce",
      movie.polishPremiereDate ? formatDatePL(movie.polishPremiereDate) : null
    ),
  ]);

  if (credits.length === 0 && movieInfo.length === 0) return null;

  return (
    <section className="flex flex-col gap-10">
      <MovieDetailsGroup title="Tworcy i obsada" items={credits} />
      <MovieDetailsGroup title="Informacje o filmie" items={movieInfo} />
    </section>
  );
};

export default MovieDetailsSections;
