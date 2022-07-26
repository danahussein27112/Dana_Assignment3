import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CurrencyViewModel } from 'src/app/Modules/currency/currencyViewModel';
import { CurrencyActions, currencyActionTypes } from 'src/app/Store/Actions/Currency.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCurrencyDetail } from 'src/app/Store/Selectors/Currency.selector';

@Component({
  selector: 'app-add-edit-currency',
  templateUrl: './add-edit-currency.component.html',
  styleUrls: ['./add-edit-currency.component.css']
})
export class AddEditCurrencyComponent implements OnInit {

  currency$?: Observable<CurrencyViewModel|undefined>;
  error$?: Observable<any>;
  isAddMode?: Boolean

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    const id: number = this.route.snapshot.params['id'];
    this.isAddMode = !id
    if (!this.isAddMode) {
      this.store.dispatch(CurrencyActions.loadCurrencyRequestAction({ id }));
      this.store.select(getCurrencyDetail({ id })).subscribe(item =>
        this.currency$ = of(item))
    }
  }
  onSubmit(submittedForm: any) {
    const id: number = this.route.snapshot.params['id'];

    if (submittedForm.invalid) {
      return;
    }

    const item: CurrencyViewModel = {
      currencyName: submittedForm.value.name, code: submittedForm.value.code, symbol: submittedForm.value.symbol,

    };
    if (!this.isAddMode) {
      this.store.dispatch(CurrencyActions.updateCurrencyRequestAction({ item, id }));
    }
    else if (this.isAddMode) {
      this.store.dispatch(CurrencyActions.createCurrencyRequestAction({ item }));
    }
  }
}
