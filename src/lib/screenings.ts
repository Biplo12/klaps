import { IScreening, IScreeningWithMovie } from "@/interfaces/IScreenings";
import { apiFetch } from "./client";

interface GetScreeningsParams {
  cityId?: string | null;
  cinemaId?: string | null;
  genreId?: string | null;
  dateFrom?: string | null;
  dateTo?: string | null;
  movieId?: string | null;
  limit?: number;
}

export const getScreenings = async (
  params: GetScreeningsParams = {}
): Promise<IScreeningWithMovie[]> => {
  const screenings = await apiFetch<IScreeningWithMovie[]>("/screenings", {
    params: {
      cityId: params.cityId ?? "",
      cinemaId: params.cinemaId ?? "",
      genreId: params.genreId ?? "",
      dateFrom: params.dateFrom ?? "",
      dateTo: params.dateTo ?? "",
      movieId: params.movieId ?? "",
      limit: params.limit?.toString() ?? "10",
    },
  });

  return screenings;
};

export const getRandomScreening = async (): Promise<IScreeningWithMovie> => {
  const screening = await apiFetch<IScreeningWithMovie>(
    "/screenings/random-screening"
  );

  if (!screening) {
    throw new Error("No screening found");
  }

  return screening;
};

export const groupScreeningsByCinema = (
  screenings: IScreening[]
): IScreening[][] => {
  const grouped = new Map<number, IScreening[]>();

  for (const screening of screenings) {
    const existing = grouped.get(screening.cinemaId) ?? [];
    existing.push(screening);
    grouped.set(screening.cinemaId, existing);
  }

  return Array.from(grouped.values());
};

export const deduplicateScreenings = (
  screenings: IScreening[]
): IScreening[] => {
  return screenings.filter((screening, index, self) => {
    const isDuplicate =
      self.findIndex((t) => t.showtimeId === screening.showtimeId) !== index;
    return !isDuplicate;
  });
};

export const getScreeningSummary = (screening: IScreeningWithMovie) => {
  const screeningsCount = screening.screenings.length;
  const uniqueCinemas = new Set(
    screening.screenings.map((s) => s.cinemaName).filter(Boolean)
  );
  const cinemasCount = uniqueCinemas.size;

  return { screeningsCount, cinemasCount };
};
