import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CountryActions } from 'src/app/Store/Actions/Country.actions';
import { of } from 'rxjs';
import { Country } from 'src/app/Modules/country/country.model';
import { getCountries, getCountryIsLoading } from 'src/app/Store/Selectors/Country.selector';
import { CountryState } from 'src/app/Store/Reducers/Country.reducer';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries$?: Observable<Country[]>;
  isLoading$?: Observable<boolean>;
  constructor(private store: Store<CountryState>, private router: Router) { }

  ngOnInit() {

    this.store.dispatch(CountryActions.loadCountriesRequestAction());
    this.isLoading$ = this.store.select(getCountryIsLoading);
    this.store.select(getCountries).subscribe(items => {
      this.countries$ = of(items);

    })
  }

  delete(id: number) {
    if (confirm('Are you sure do you want to delete this country?')) {
      this.store.dispatch(CountryActions.deleteCountryRequestAction({ id }));
    }
  }

  selectById(id: number) {
    this.router.navigate(['country-detail/' + id]);
  }

}