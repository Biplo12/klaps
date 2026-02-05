import { IMovie } from "../interfaces/IMovies";
import { apiFetch } from "./client";

export const getMovies = async (): Promise<IMovie[]> => {
  const movies = await apiFetch<IMovie[]>("/movies");
  return movies;
};

export const getMovieById = async (id: string): Promise<IMovie | null> => {
  try {
    const movie = await apiFetch<IMovie>(`/movies/${id}`);
    return movie;
  } catch {
    return null;
  }
};
