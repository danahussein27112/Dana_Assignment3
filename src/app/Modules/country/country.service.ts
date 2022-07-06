import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Country } from "./country.model";

@Injectable({
    providedIn: 'root'
})
export class CountryService {
 
    private selectedCountry = new Subject<any>();
    countrySelected = this.selectedCountry.asObservable();
 
    constructor(private http: HttpClient) {}
 
    getCountries(){
        return this.http.get('https://localhost:44373/Country'); 
    }
 
    getCountry(id: number)
    {
        return this.http.get('https://localhost:44373/Country/id?' + id); 
    }
 
    selectCountry(country: Country) {
        this.selectedCountry.next(country)
    }
 
    saveCountry(country: Country) 
    {
        return this.http.post<Country>('https://localhost:44373/Country', country);
    }
 
    update(country: Country) 
    {
        return this.http.post<Country>('' + country.id, country);
    }
 
    delete(id:number) 
    {
        return this.http.delete<Country>('' + id);
    }    
}