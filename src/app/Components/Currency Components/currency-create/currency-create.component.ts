import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Country } from 'src/app/Modules/country/country.model';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CurrencyViewModel } from 'src/app/Modules/currency/currencyViewModel';
import { CountryActions } from 'src/app/Store/Actions/Country.actions';
import { CurrencyActions, currencyActionTypes } from 'src/app/Store/Actions/Currency.actions';
import { AppState } from 'src/app/Store/Reducers';
import { CurrencyState } from 'src/app/Store/Reducers/Currency.reducer';
import { getCountries, getCountryIsLoading } from 'src/app/Store/Selectors/Country.selector';

@Component({
  selector: 'app-currency-create',
  templateUrl: './currency-create.component.html',
  styleUrls: ['./currency-create.component.css']
})
export class CurrencyCreateComponent implements OnInit {
  countries$?: Observable<Country[]>;
  isLoading$?: Observable<boolean>;

  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(CountryActions.loadRequestAction());
      this.isLoading$ = this.store.select(getCountryIsLoading);
  
      this.store.select(getCountries).subscribe(items => {
        this.countries$ = of(items);
        this.store.dispatch(CountryActions.loadSuccessAction({items}))

  })}
  onSubmit(submittedForm:any) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }


    const item: CurrencyViewModel = {
       currencyName: submittedForm.value.currencyName, code: submittedForm.value.code,symbol:submittedForm.value.symbol,country:submittedForm.value.country
      
    };
   this.store.dispatch(CurrencyActions.saveRequestAction({item}));
   this.store.dispatch(CurrencyActions.saveSuccessAction({item}));

  }
}