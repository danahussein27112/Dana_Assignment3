import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CurrencyCountriesService {
    constructor(private http: HttpClient) { }

    getCountries(id: number) {
        return this.http.get('https://localhost:44373/CurrencyCountries/id?' + 'id=' + id);
    }
}