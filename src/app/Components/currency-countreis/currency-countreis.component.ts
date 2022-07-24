import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { currencyCountreis } from 'src/app/Modules/CurrencyCountries/currencyCountries.model';
import { CurrencyCountriesActions } from 'src/app/Store/Actions/CurrencyCountries.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCountries, getCountryIsLoading } from 'src/app/Store/Selectors/CurrencyCountries.selector';

@Component({
  selector: 'app-currency-countreis',
  templateUrl: './currency-countreis.component.html',
  styleUrls: ['./currency-countreis.component.css']
})
export class CurrencyCountreisComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store<AppState>,private router:Router) { }
  countries$?: Observable<currencyCountreis[]>;
  isLoading$?: Observable<boolean>;

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.store.dispatch(CurrencyCountriesActions.loadCountriesRequestAction({ id }));
    this.store.select(getCountries()).subscribe(countries =>
      this.countries$ = of(countries)
    )
    this.store.select(getCountryIsLoading).subscribe(item =>
      this.isLoading$ = of(item))
  }
  selectById(id: number) {
    this.router.navigate(['country-detail/' + id]);
  }
}

