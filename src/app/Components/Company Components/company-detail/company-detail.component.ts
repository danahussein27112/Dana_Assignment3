import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable, of } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';
import { Country } from 'src/app/Modules/country/country.model';
import { companyActionTypes } from 'src/app/Store/Actions/company.actions';
import { CountryActions } from 'src/app/Store/Actions/Country.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getAllCompanies, getCompany, getCompanyDetail, getIsLoading } from 'src/app/Store/Selectors/Company.selector';
import { getCountries } from 'src/app/Store/Selectors/Country.selector';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  company$?: Observable<Company|undefined>;
  selectedId$?: Observable<number>;
  error$?: Observable<any>;
  countries$?: Observable<Country[]>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    const id: number = this.route.snapshot.params['id'];
    this.store.dispatch(companyActionTypes.loadCompanies());
    this.store.dispatch(companyActionTypes.loadCompanyRequestAction({ id }));
    this.store.select(getCompanyDetail({ id })).subscribe(item =>
      this.company$ = of(item),
    )
    this.store.select(getCountries).subscribe(items => {
      this.countries$ = of(items);
      this.store.dispatch(CountryActions.loadSuccessAction({items}))})
  }
  onSubmit(submittedForm: any) {
    const id: number = this.route.snapshot.params['id'];

    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }
    const items: CompanyViewModel = {
      companyName: submittedForm.value.companyName, alias: submittedForm.value.alias
,countryId:submittedForm.value.countryId
    };
    this.store.dispatch(companyActionTypes.updateCompany({ items, id }));
    this.store.dispatch(companyActionTypes.updateSuccessAction({ items }));
  }
  onChange(){
  }
}