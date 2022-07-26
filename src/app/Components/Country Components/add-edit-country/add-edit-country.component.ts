import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from 'src/app/Modules/country/country.model';
import { countryViewModel } from 'src/app/Modules/country/country.viewModel';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CountryActions } from 'src/app/Store/Actions/Country.actions';
import { CurrencyActions } from 'src/app/Store/Actions/Currency.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCountryDetail } from 'src/app/Store/Selectors/Country.selector';
import { getCurrencies } from 'src/app/Store/Selectors/Currency.selector';
@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent implements OnInit {


  country$?: Observable<Country | undefined>;
  error$?: Observable<any>;
  currencies$?: Observable<Currency[]>;
  isAddMode?: Boolean


  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    const id: number = this.route.snapshot.params['id'];
    this.isAddMode = !id
    this.store.dispatch(CurrencyActions.loadCurrenciesRequestAction());
    this.store.select(getCurrencies).subscribe(items =>
      this.currencies$ = of(items));
    if (!this.isAddMode) {
      this.store.dispatch(CountryActions.loadCountryRequestAction({ id }));
      this.store.select(getCountryDetail({ id })).subscribe(item =>
        this.country$ = of(item))
    }
  }
  onSubmit(submittedForm: any) {
    const id: number = this.route.snapshot.params['id'];

    if (submittedForm.invalid) {
      return;
    }

    const item: countryViewModel = {
      name: submittedForm.value.name, flag: submittedForm.value.flag, population: submittedForm.value.population, timeZone: submittedForm.value.timeZone, language: submittedForm.value.language, capitalCity: submittedForm.value.capitalCity, currencyId: submittedForm.value.id

    };
    if (!this.isAddMode) {
      this.store.dispatch(CountryActions.updateCountryRequestAction({ item, id }));
    }
    else if (this.isAddMode) {
      this.store.dispatch(CountryActions.createCountryRequestAction({ item }));
    }
  }
}
