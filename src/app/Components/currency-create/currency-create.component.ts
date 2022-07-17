import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CurrencyViewModel } from 'src/app/Modules/currency/currencyViewModel';
import { CurrencyActions, currencyActionTypes } from 'src/app/Store/Actions/Currency.actions';
import { CurrencyState } from 'src/app/Store/Reducers/Currency.reducer';

@Component({
  selector: 'app-currency-create',
  templateUrl: './currency-create.component.html',
  styleUrls: ['./currency-create.component.css']
})
export class CurrencyCreateComponent implements OnInit {

  constructor(private store: Store<CurrencyState>) { }
  ngOnInit() {
  }

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