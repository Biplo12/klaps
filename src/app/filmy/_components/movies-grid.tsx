import React from "react";
import { IMovie } from "@/interfaces/IMovies";
import MovieCard from "./movie-card";
import EmptyState from "@/components/common/empty-state";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";

interface MoviesGridProps {
  movies: readonly IMovie[];
  showDescription?: boolean;
  screenings?: IScreeningWithMovie[] | null;
}

const MoviesGrid: React.FC<MoviesGridProps> = ({
  movies,
  showDescription = false,
  screenings,
}) => {
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
      {movies.map((movie) => {
        const screening = screenings?.find((s) => s.movie.id === movie.id);
        const screeningsCount = screening?.screenings.length;
        const cinemasCount = screening?.screenings.length;

        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            screeningsCount={screeningsCount}
            cinemasCount={cinemasCount}
            showDescription={showDescription}
          />
        );
      })}
    </div>
  );
};

export default MoviesGrid;
