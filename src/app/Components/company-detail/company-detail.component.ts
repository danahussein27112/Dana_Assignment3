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
 company$?: Observable<CompanyViewModel>;
isLoading$?: Observable<boolean>;
public entityForm?: FormGroup;
selectedId$?:Observable<number>;
companies$?: Observable<Company[]>;
isUpdateActivated = false;
error$?: Observable<any>;


  constructor(private router:Router,private route:ActivatedRoute,private store: Store<AppState>) { }

  ngOnInit(): void {

  const id:number = this.route.snapshot.params['id'];
  let company:Company={alias:'',companyName:'',country:undefined,id:0};
    this.store.dispatch(companyActionTypes.loadCompanies());

  this.store.dispatch(companyActionTypes.loadCompanyRequestAction({id}));
  this.store.select(getAllCompanies).subscribe(items => {
     this.companies$ = of(items) 
    company=items[id];
 console.log(company)
  })}
  
 // this.store.dispatch(companyActionTypes.loadCompanySuccessAction({id}));
  // this.store.select(getCompanyDetail({id})).subscribe(item=>
  //   company=item)
}

// save(): void {
//   const update = {
//     compnyName: this.entityForm?.value.name,
//     alias: this.entityForm?.value.alias
//   };
//   });
// }
  
