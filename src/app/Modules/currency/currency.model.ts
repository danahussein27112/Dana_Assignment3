import { Country } from "../country/country.model";

export interface Currency {
    id: number;
    code: string;
    currencyName: string;
    symbol:string;
    country:Country
  }