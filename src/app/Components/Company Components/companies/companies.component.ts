import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyService } from 'src/app/Modules/company/company.service';
import { Country } from 'src/app/Modules/country/country.model';
import { companyActionTypes, loadCompanies } from 'src/app/Store/Actions/company.actions';
import { CountryActions } from 'src/app/Store/Actions/Country.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getAllCompanies, getIsLoading,getCompanyError } from 'src/app/Store/Selectors/Company.selector';
import { getCountries, getCountryIsLoading } from 'src/app/Store/Selectors/Country.selector';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies$?: Observable<Company[]>;
  isUpdateActivated = false;
  isLoading$?: Observable<boolean>;
  error$?: Observable<any>;
  countries$?: Observable<Country[]>;
  constructor(private store: Store<AppState>,private router:Router) { }


  ngOnInit() {

    this.store.dispatch(companyActionTypes.loadCompanies());
    this.isLoading$ = this.store.select(getIsLoading);

    this.store.select(getAllCompanies).subscribe(items => {
      this.companies$ = of(items) 
   
     })
     this.error$ = this.store.select(getCompanyError);
     this.store.dispatch(CountryActions.loadRequestAction());
     this.isLoading$ = this.store.select(getCountryIsLoading);
 
     this.store.select(getCountries).subscribe(items => {
       this.countries$ = of(items);
       this.store.dispatch(CountryActions.loadSuccessAction({items}))
  })}

  delete(id: number) {
    if (confirm('Are you sure do you want to delete this company?')) {
    this.store.dispatch(companyActionTypes.deleteCompany({ id }));
    this.store.dispatch(companyActionTypes.deleteSuccessAction({id}));
    this.store.dispatch(companyActionTypes.loadCompanies());
    
  }}
  onRefresh()
  {
      this.store.dispatch(companyActionTypes.loadCompanies());
  }

  selectById(id:number) {
      this.router.navigate(['company-detail/'+ id]);     
  }

 
}