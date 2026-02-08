import React from "react";
import { IMovie } from "@/interfaces/IMovies";
import { formatGeneres, formatDuration } from "@/lib/utils";

interface MovieCardMetaProps {
  movie: IMovie;
}

const MovieCardMeta: React.FC<MovieCardMetaProps> = ({ movie }) => {
  const formattedGenres = formatGeneres(movie.movies_genres);
  const formattedDuration = formatDuration(movie.duration);

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500">
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
  );
};

export default MovieCardMeta;
