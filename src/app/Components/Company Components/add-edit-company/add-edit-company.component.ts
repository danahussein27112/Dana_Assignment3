import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Company } from 'src/app/Modules/company/company.model';
import { CompanyViewModel } from 'src/app/Modules/company/company.ViewModel';
import { Country } from 'src/app/Modules/country/country.model';
import { companyActionTypes } from 'src/app/Store/Actions/company.actions';
import { loadCountriesRequestAction } from 'src/app/Store/Actions/Country.actions';
import { AppState } from 'src/app/Store/Reducers';
import { getCompanyDetail, getError } from 'src/app/Store/Selectors/Company.selector';
import { getCountries } from 'src/app/Store/Selectors/Country.selector'

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.css']
})
export class AddEditCompanyComponent implements OnInit {

  company$?: Observable<Company | undefined>;
  error$?: Observable<any>;
  countries$?: Observable<Country[]>;
  isAddMode?: Boolean
  // companyName: FormControl =  new FormControl('', [Validators.required]); 
  alias: FormControl = new FormControl('', [Validators.required]);
  country: FormControl = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(loadCountriesRequestAction());
    const id = this.route.snapshot.params['id'];
    this.isAddMode = !id

    if (!this.isAddMode) {
      this.store.dispatch(companyActionTypes.loadCompanyRequestAction({ id }));

      this.store.select(getCompanyDetail({ id })).subscribe(item =>
        this.company$ = of(item))
    }

    this.store.select(getCountries).subscribe(items => {
      this.countries$ = of(items)
    },
      err => {
        this.error$ = of(err)
      }
    )

  }
  onSubmit(submittedForm: any) {
    const id: number = this.route.snapshot.params['id'];
    if (submittedForm.invalid) {
      return;
    }


    const items: CompanyViewModel = {
      companyName: submittedForm.value.companyName, alias: submittedForm.value.alias
      , countryId: submittedForm.value.countryId
    };
    if (!this.isAddMode) {
      this.store.dispatch(companyActionTypes.updateCompanyRequestAction({ items, id }));
      this.store.select(getError).subscribe(err => {
        alert(err.message);
        this.error$ = of(err)
      })
    }

    else if (this.isAddMode) {
      this.store.dispatch(companyActionTypes.createCompanyRequestAction({ items }));
    }
  }
}
