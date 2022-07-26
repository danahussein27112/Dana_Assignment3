import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Country } from "./country.model";
import { countryViewModel } from "./country.viewModel";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private selectedCountry = new Subject<any>();
  countrySelected = this.selectedCountry.asObservable();

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://localhost:44373/Country');
  }

  getCountry(id: number) {
    return this.http.get('https://localhost:44373/country/id?' + 'id=' + id);
  }

  create(country: countryViewModel) {
    return this.http.post<countryViewModel>('https://localhost:44373/Country/add', country);
  }

  delete(Id: number): Observable<any> {
    return this.http.delete('https://localhost:44373/country/Delete/id?' + 'id=' + Id);
  }

  update(Id: number, country: countryViewModel): Observable<countryViewModel> {
    return this.http.put<countryViewModel>('https://localhost:44373/country/?id=' + Id, country);
  }
}