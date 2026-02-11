export interface IGenre {
  id: number;
  name: string;
}

export interface IMovieSummary {
  id: number;
  title: string;
  titleOriginal: string | null;
  productionYear: number;
  duration: number | null;
  posterUrl: string | null;
  genres: IGenre[];
}

export interface IMovieHero extends IMovieSummary {
  description: string | null;
  backdropUrl: string | null;
}

export interface IMovie {
  id: number;
  title: string;
  titleOriginal: string | null;
  description: string | null;
  productionYear: number;
  duration: number | null;
  language: string | null;
  posterUrl: string | null;
  backdropUrl: string | null;
  videoUrl: string | null;
  worldPremiereDate: string | null;
  polishPremiereDate: string | null;
  genres: IGenre[];
  ratings: {
    users: { score: number; votes: number } | null;
    critics: { score: number; votes: number } | null;
  };
  filmwebUrl: string;
}

export interface IMultiCityMovie {
  id: number;
  title: string;
  productionYear: number;
  posterUrl: string | null;
  citiesCount: number;
}

export interface PaginatedResponse<T> {
  data: readonly T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
