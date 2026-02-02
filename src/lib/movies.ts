import { IMovie } from "../interfaces/IMovies";
import { apiFetch } from "./client";

export const getMovies = async () => {
  const movies = await apiFetch<IMovie[]>("/movies");
  return movies;
};
