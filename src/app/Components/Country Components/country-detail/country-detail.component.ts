import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from 'src/app/Modules/country/country.model';
import { countryViewModel } from 'src/app/Modules/country/country.viewModel';
import { Currency } from 'src/app/Modules/currency/currency.model';
import { CountryActions, countryActionTypes } from 'src/app/Store/Actions/Country.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCountryDetail } from 'src/app/Store/Selectors/Country.selector';
import { getCurrencies } from 'src/app/Store/Selectors/Currency.selector';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

 
  country$?: Observable<Country|undefined>;
  selectedId$?: Observable<number>;
  error$?: Observable<any>;
  currencies$?: Observable<Currency[]>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    const id: number = this.route.snapshot.params['id'];
    this.store.dispatch(CountryActions.loadRequestAction());
    this.store.dispatch(CountryActions.loadCountryRequestAction({ id }));
    this.store.select(getCountryDetail({ id })).subscribe(item =>
      this.country$ = of(item),
    )
    this.store.select(getCurrencies).subscribe(items => {
      this.currencies$ = of(items);
  
  })
  }
  onSubmit(submittedForm: any) {
    const id: number = this.route.snapshot.params['id'];

    console.log(submittedForm.value);
debugger
    if (submittedForm.invalid) {
      return;
    }
    const item: countryViewModel = {
      name: submittedForm.value.name, flag: submittedForm.value.flag, population: submittedForm.value.population,timeZone:submittedForm.value.timeZone,language:submittedForm.value.language,capitalCity:submittedForm.value.capitalCity,currencyId:submittedForm.value.currecny

    };
    this.store.dispatch(CountryActions.updateRequestAction({ item, id }));
    this.store.dispatch(CountryActions.updateSuccessAction({ item }));
    this.router.navigateByUrl('/countries')  }
  onChange(){
  }
}