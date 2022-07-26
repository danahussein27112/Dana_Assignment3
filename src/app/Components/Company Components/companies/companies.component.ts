import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { Country } from 'src/app/Modules/country/country.model';
import { companyActionTypes } from 'src/app/Store/Actions/company.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getAllCompanies, getIsLoading, getError } from 'src/app/Store/Selectors/Company.selector';

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
  constructor(private store: Store<AppState>, private router: Router) { }

  @ViewChild(MatSort) sort?: MatSort;
  ngOnInit() {

    this.store.dispatch(companyActionTypes.loadCompaniesRequestAction());
    this.isLoading$ = this.store.select(getIsLoading);

    this.store.select(getAllCompanies).subscribe(items => {
      this.companies$ = of(items)
    },
    )
    this.error$ = this.store.select(getError);
  }


  delete(id: number) {
    if (confirm('Are you sure do you want to delete this company?')) {
      this.store.dispatch(companyActionTypes.deleteCompanyRequestAction({ id }));
      this.onRefresh();
    }
  }
  onRefresh() {
    this.store.dispatch(companyActionTypes.loadCompaniesRequestAction());
  }
  selectById(id: number) {
    this.router.navigate(['company-detail/' + id]);
  }
}