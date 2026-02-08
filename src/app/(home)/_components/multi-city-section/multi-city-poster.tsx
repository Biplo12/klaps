import React from "react";
import { IMultiCityMovie } from "@/interfaces/IMovies";
import MultiCityPosterImage from "./multi-city-poster-image";
import MultiCityPosterDetails from "./multi-city-poster-details";
import MultiCityRunnersUp from "./multi-city-runners-up";

interface MultiCityPosterProps {
  movie: IMultiCityMovie;
  runnersUp: IMultiCityMovie[];
}

const MultiCityPoster: React.FC<MultiCityPosterProps> = ({
  movie,
  runnersUp,
}) => {
  if (!movie.posterUrl) return null;

  return (
    <div className="hidden lg:flex gap-8 items-start">
      <MultiCityPosterImage posterUrl={movie.posterUrl} title={movie.title} />

      <div className="flex flex-col gap-4 pt-4">
        <MultiCityPosterDetails movie={movie} />
        <MultiCityRunnersUp movies={runnersUp} />
      </div>
    </div>
  );
};

export default MultiCityPoster;
