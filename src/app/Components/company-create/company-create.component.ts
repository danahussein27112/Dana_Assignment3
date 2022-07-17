import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';
import { companyActionTypes, createCompany } from 'src/app/Store/Actions/company.actions';
import { AppState } from 'src/app/Store/Reducers';

@Component({
  selector: 'company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit(submittedForm:any) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }


    const items: CompanyViewModel = {
      companyName: submittedForm.value.companyName, alias: submittedForm.value.alias,countryName:submittedForm.value.countryName
      
    };
   this.store.dispatch(companyActionTypes.createCompany({items}));
   this.store.dispatch(companyActionTypes.createSuccessAction({items}));
  }
}