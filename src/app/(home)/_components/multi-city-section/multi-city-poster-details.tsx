import React from "react";
import LinkWithArrow from "@/components/ui/read-more-link";
import { IMultiCityMovie } from "@/interfaces/IMovies";

interface MultiCityPosterDetailsProps {
  movie: IMultiCityMovie;
}

const MultiCityPosterDetails: React.FC<MultiCityPosterDetailsProps> = ({
  movie,
}) => {
  return (
    <>
      <span className="text-blood-red text-sm uppercase tracking-widest">
        Najczęściej grany
      </span>
      <h3 className="text-white text-2xl xl:text-3xl font-bold leading-tight">
        {movie.title}
      </h3>
      <span className="text-neutral-500 text-sm">
        {movie.year} · {movie.citiesCount} miast
      </span>
      <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
        Wyświetlany w&nbsp;{movie.citiesCount} miastach jednocześnie &nbsp;— od
        dużych metropolii po mniejsze ośrodki.
      </p>
      <LinkWithArrow href={`/filmy/${movie.id}`} label="Zobacz szczegóły" />
    </>
  );
};

export default MultiCityPosterDetails;
