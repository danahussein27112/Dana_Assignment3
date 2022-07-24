import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from 'src/app/Modules/country/country.model';
import { countryViewModel } from 'src/app/Modules/country/country.viewModel';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CountryActions } from 'src/app/Store/Actions/Country.actions';
import { CurrencyActions } from 'src/app/Store/Actions/Currency.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCountries, getCountryIsLoading } from 'src/app/Store/Selectors/Country.selector';
import { getCurrencies, getCurrencyIsLoading } from 'src/app/Store/Selectors/Currency.selector';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {
  currencies$?: Observable<Currency[]>;
  isLoading$?: Observable<boolean>;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(CurrencyActions.loadRequestAction());
    this.isLoading$ = this.store.select(getCurrencyIsLoading);

    this.store.select(getCurrencies).subscribe(items => {
      this.currencies$ = of(items);

    })
  }

  onSubmit(submittedForm: any) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }


    const item: countryViewModel = {
      name: submittedForm.value.name, flag: submittedForm.value.flag, population: submittedForm.value.population, timeZone: submittedForm.value.timeZone, language: submittedForm.value.language, capitalCity: submittedForm.value.capitalCity, currencyId: submittedForm.value.id

    };
    this.store.dispatch(CountryActions.saveRequestAction({ item }));
    this.store.dispatch(CountryActions.saveSuccessAction({ item }));
  }
}