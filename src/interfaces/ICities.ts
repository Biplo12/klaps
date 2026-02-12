import { IScreeningGroup } from "./IScreenings";

export interface ICity {
  id: number;
  name: string;
  nameDeclinated: string;
}

export interface ICityDetails extends ICity {
  city: ICity;
  screenings: IScreeningGroup[];
}
