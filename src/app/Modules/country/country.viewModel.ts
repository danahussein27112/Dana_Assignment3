import { Currency } from "../currency/currency.model";

export interface countryViewModel{
    name: string;
    flag: string;
    population:number;
    timeZone:string;
    language:string;
    capitalCity:string;
    currency:Currency;
}