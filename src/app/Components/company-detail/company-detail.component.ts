import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable, of } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { companyActionTypes } from 'src/app/Store/Actions/company.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCompany, getCompanyError } from 'src/app/Store/Selectors/Company.selector';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
 company$?: Observable<Company>;
isLoading$?: Observable<boolean>;
public entityForm?: FormGroup;
company?:Company


  constructor(private router:Router,private route:ActivatedRoute,private store: Store<AppState>) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
   this.store.dispatch(companyActionTypes.loadCompanyRequestAction(id))
 this.store.select(getCompany, { id}).subscribe(item =>{
  this.company$=of(item)
  //this.company$ = item.filter(x=> x.id == id)[0];

  console.log("company",id);
  console.log("company",this.company$);
 //this.store.dispatch(companyActionTypes.loadCompanySuccessAction({}))
 });
}}

// save(): void {
//   const update = {
//     compnyName: this.entityForm?.value.name,
//     alias: this.entityForm?.value.alias
//   };
//   });
// }
