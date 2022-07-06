import { Component, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity/public_api';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CurrencyActions } from 'src/app/Store/Actions/Currency.actions';
import { getCurrencies, getCurrencyIsLoading } from 'src/app/Store/Selectors/Currency.selector';
import { State } from 'WebApplication4/ClientApp/src/app/store/reducers';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currencies$?: Observable<Currency[]>;

  currencyToBeUpdated!: Currency;

  isUpdateActivated = false;
  isLoading$?: Observable<boolean>;
  constructor(private store: Store<State>) { }


  ngOnInit() {

    this.store.dispatch(CurrencyActions.loadRequestAction());
    this.isLoading$ = this.store.select(getCurrencyIsLoading);

    this.store.select(getCurrencies).subscribe(items => {
      this.currencies$ = of(items)  
     })





  }

  delete(id: number) {
    if (confirm('Are you sure do you want to delete this currency?')) {
    this.store.dispatch(CurrencyActions.deleteRequestAction({ id }));
    this.store.dispatch(CurrencyActions.deleteSuccessAction({id}));
  }}

  showUpdateForm(currecny: Currency) {
    this.currencyToBeUpdated = { ...currecny };
    this.isUpdateActivated = true;
  }

  update(updateForm: any) {
    const update: Update<Currency> = {
      id: this.currencyToBeUpdated.id,
      changes: {
        ...this.currencyToBeUpdated,
        ...updateForm.value
      }
    };


  }
}