import { ICity, ICityDetails } from "@/interfaces/ICities";
import { apiFetch } from "./client";

export const getCities = async (): Promise<ICity[]> => {
  const cities = await apiFetch<ICity[]>("/cities");
  return cities;
};

export const getCityById = async (id: number): Promise<ICityDetails> => {
  const city = await apiFetch<ICityDetails>(`/cities/${id}`);
  return city;
};
