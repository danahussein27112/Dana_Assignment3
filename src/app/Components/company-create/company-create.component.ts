import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Company } from 'src/app/Modules/company/company.model';
import { createCompany } from 'src/app/Store/Actions/company.actions';
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


    const company: Company = {
      companyName: submittedForm.value.name, alias: submittedForm.value.alias,
      id:0,countryId:0
    };
  //  this.store.dispatch(createCompany({items}));

  }
}