import React from "react";
import { IMovie } from "@/interfaces/IMovies";
import MovieCard from "./movie-card";
import EmptyState from "@/components/common/empty-state";

interface MoviesListProps {
  movies: readonly IMovie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <EmptyState
        headline="Brak filmów"
        description="Nie znaleziono filmów do wyświetlenia. Sprawdź ponownie później."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-12">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
