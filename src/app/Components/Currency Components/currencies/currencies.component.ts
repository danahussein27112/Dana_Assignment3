import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity/public_api';
import { State, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CurrencyActions } from 'src/app/Store/Actions/Currency.actions';
import { CurrencyState } from 'src/app/Store/Reducers/Currency.reducer';
import { getCurrencies, getCurrencyIsLoading } from 'src/app/Store/Selectors/Currency.selector';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currencies$?: Observable<Currency[]>;
  isLoading$?: Observable<boolean>;
  constructor(private store: Store<CurrencyState>,private router:Router) { }

  ngOnInit() {

    this.store.dispatch(CurrencyActions.loadRequestAction());
    this.isLoading$ = this.store.select(getCurrencyIsLoading);
    this.store.select(getCurrencies).subscribe(items => {
      this.currencies$ = of(items);
  
     })
  }

  delete(id: number) {
    if (confirm('Are you sure do you want to delete this currency?')) {
    this.store.dispatch(CurrencyActions.deleteRequestAction({ id }));
    this.store.dispatch(CurrencyActions.deleteSuccessAction({id}));
    window.location.reload();

  }}
  selectById(id:number) {
    this.router.navigate(['currency-detail/'+ id]);     
}
}