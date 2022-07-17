import { Currency } from "../currency/currency.model";

export interface Country {
    id: number;
    name: string;
    flag: string;
    population:number;
    timeZone:string;
    language:string;
    capitalCity:string;
    currency:string;
  }
  