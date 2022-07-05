import { Component, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyService } from 'src/app/Modules/company/company.service';
import { companyActionTypes, loadCompanies } from 'src/app/Store/Actions/company.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getAllCompanies, getIsLoading } from 'src/app/Store/Selectors/Company.selector';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies$?: Observable<Company[]>;
  displayedColumns: string[] = ['ID', 'Company Name', 'Alias', 'Country'];

  companyToBeUpdated!: Company;

  isUpdateActivated = false;
  isLoading$?: Observable<boolean>;
  constructor(private store: Store<AppState>) { }


  ngOnInit() {

    this.store.dispatch(companyActionTypes.loadCompanies());
    this.isLoading$ = this.store.select(getIsLoading);

    this.store.select(getAllCompanies).subscribe(items => {
      this.companies$ = of(items)  
     })





  }

  delete(id: number) {
    if (confirm('Are you sure do you want to delete this company?')) {
    this.store.dispatch(companyActionTypes.deleteCompany({ id }));
    this.store.dispatch(companyActionTypes.deleteSuccessAction({id}));
  }}

  showUpdateForm(company: Company) {
    this.companyToBeUpdated = { ...company };
    this.isUpdateActivated = true;
  }

  update(updateForm: any) {
    const update: Update<Company> = {
      id: this.companyToBeUpdated.id,
      changes: {
        ...this.companyToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(companyActionTypes.updateCompany({ update }));

    this.isUpdateActivated = false;
    // this.companyToBeUpdated = null;
  }
}