import React from "react";
import Link from "next/link";
import { IMovie } from "@/interfaces/IMovies";
import MoviePoster from "@/components/common/movie-poster";
import NoMoviePoster from "@/components/common/no-movie-poster";
import MovieCardMeta from "./movie-card-meta";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <article className="group flex flex-col">
      <div className="relative">
        <Link
          href={`/filmy/${movie.id}`}
          className="block overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.02] w-full aspect-2/3 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {movie.posterUrl ? (
            <MoviePoster
              posterUrl={movie.posterUrl}
              width={220}
              height={330}
              className="w-full h-full object-cover min-w-full min-h-full"
            />
          ) : (
            <NoMoviePoster className="w-full h-full" />
          )}
        </Link>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <h3 className="text-base md:text-lg font-semibold uppercase tracking-wide">
          <Link
            href={`/filmy/${movie.id}`}
            className="text-white hover:text-blood-red transition-colors line-clamp-2 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {movie.title}
          </Link>
        </h3>

        <MovieCardMeta movie={movie} />
      </div>
    </article>
  );
};

export default MovieCard;
