import {
  IScreening,
  IScreeningGroup,
  IRandomScreening,
} from "@/interfaces/IScreenings";
import { apiFetch } from "./client";

interface GetScreeningsParams {
  cityId?: string | null;
  cinemaId?: string | null;
  genreId?: string | null;
  dateFrom?: string | null;
  dateTo?: string | null;
  limit?: number;
}

interface GetMovieScreeningsParams {
  movieId: string;
  limit?: number;
}

export const getScreenings = async (
  params: GetScreeningsParams = {},
): Promise<IScreeningGroup[]> => {
  const screenings = await apiFetch<IScreeningGroup[]>("/screenings", {
    params: {
      cityId: params.cityId ?? "",
      cinemaId: params.cinemaId ?? "",
      genreId: params.genreId ?? "",
      dateFrom: params.dateFrom ?? "",
      dateTo: params.dateTo ?? "",
      limit: params.limit?.toString() ?? "10",
    },
  });

  return screenings;
};

export const getMovieScreenings = async (
  params: GetMovieScreeningsParams,
): Promise<IScreening[]> => {
  const screenings = await apiFetch<IScreening[]>("/screenings", {
    params: {
      movieId: params.movieId,
      limit: params.limit?.toString() ?? "100",
    },
  });

  return screenings;
};

export const getRandomScreening = async (): Promise<IRandomScreening> => {
  const screening = await apiFetch<IRandomScreening>(
    "/screenings/random-screening",
  );

  if (!screening) {
    throw new Error("No screening found");
  }

  return screening;
};

export const groupScreeningsByCinema = (
  screenings: IScreening[],
): IScreening[][] => {
  const grouped = new Map<number, IScreening[]>();

  for (const screening of screenings) {
    const existing = grouped.get(screening.cinema.id) ?? [];
    existing.push(screening);
    grouped.set(screening.cinema.id, existing);
  }

  return Array.from(grouped.values());
};
