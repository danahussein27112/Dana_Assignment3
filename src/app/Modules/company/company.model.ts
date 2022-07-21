import { Country } from "../country/country.model";

export interface Company {
    id: number;
    companyName: string;
    alias: string;
    country:Country |undefined;
    countryId:number;
    
  }