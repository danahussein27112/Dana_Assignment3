import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CurrencyViewModel } from 'src/app/Modules/currency/currencyViewModel';
import { CurrencyActions, currencyActionTypes } from 'src/app/Store/Actions/Currency.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCountryDetail } from 'src/app/Store/Selectors/Country.selector';
import { getCurrencyDetail } from 'src/app/Store/Selectors/Currency.selector';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {

  
  currency$?: Observable<CurrencyViewModel|undefined>;
  selectedId$?: Observable<number>;
  error$?: Observable<any>;

  constructor( private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    const id: number = this.route.snapshot.params['id'];
    this.store.dispatch(CurrencyActions.loadRequestAction());
    this.store.dispatch(CurrencyActions.loadCurrencyRequestAction({ id }));
    this.store.select(getCurrencyDetail({ id })).subscribe(item =>
      this.currency$ = of(item),
    )
  }
  onSubmit(submittedForm: any) {
    const id: number = this.route.snapshot.params['id'];

    console.log(submittedForm.value);
debugger
    if (submittedForm.invalid) {
      return;
    }
    const item: CurrencyViewModel = {
      currencyName: submittedForm.value.name, code: submittedForm.value.code, country: submittedForm.value.country,symbol:submittedForm.value.symbol

    };
    this.store.dispatch(CurrencyActions.updateRequestAction({ item, id }));
    this.store.dispatch(CurrencyActions.updateSuccessAction({ item }));
  }
  onChange(){
  }
}