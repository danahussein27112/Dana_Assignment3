import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable, of } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';
import { companyActionTypes } from 'src/app/Store/Actions/company.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getAllCompanies, getCompany, getCompanyDetail, getCompanyError, getIsLoading } from 'src/app/Store/Selectors/Company.selector';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  company$?: Observable<Company>;
  public entityForm?: FormGroup;
  selectedId$?: Observable<number>;
  isUpdateActivated = false;
  error$?: Observable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    const id: number = this.route.snapshot.params['id'];
    this.store.dispatch(companyActionTypes.loadCompanies());
    this.store.dispatch(companyActionTypes.loadCompanyRequestAction({ id }));
    this.store.select(getCompanyDetail({ id })).subscribe(item =>
      this.company$ = of(item),
    )
  }
  onSubmit(submittedForm: any) {
    const id: number = this.route.snapshot.params['id'];

    console.log(submittedForm.value);
debugger
    if (submittedForm.invalid) {
      return;
    }
    const items: CompanyViewModel = {
      companyName: submittedForm.value.companyName, alias: submittedForm.value.alias, countryName: submittedForm.value.countryName

    };
    this.store.dispatch(companyActionTypes.updateCompany({ items, id }));
    this.store.dispatch(companyActionTypes.updateSuccessAction({ items }));
  }
  onChange(){
  }
}