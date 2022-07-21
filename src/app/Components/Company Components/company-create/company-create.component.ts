import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';
import { Country } from 'src/app/Modules/country/country.model';
import { companyActionTypes, createCompany } from 'src/app/Store/Actions/company.actions';
import { CountryActions } from 'src/app/Store/Actions/Country.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCountries, getCountryIsLoading } from 'src/app/Store/Selectors/Country.selector';

@Component({
  selector: 'company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
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


    const items: CompanyViewModel = {
      companyName: submittedForm.value.companyName, alias: submittedForm.value.alias
      ,countryId:submittedForm.value.id
    };
   this.store.dispatch(companyActionTypes.createCompany({items}));
   this.store.dispatch(companyActionTypes.createSuccessAction({items}));
  }
}