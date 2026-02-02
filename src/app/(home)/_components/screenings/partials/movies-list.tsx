import { getMovies } from "@/lib/movies";
import React from "react";
import Image from "next/image";
import MovieItem from "./movie-item";

const MoviesList: React.FC = async () => {
  const movies = await getMovies();
  return (
    <div className="grid grid-cols-6 gap-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
