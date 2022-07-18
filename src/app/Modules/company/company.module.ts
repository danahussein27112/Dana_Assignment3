import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './company.service';
import { FormsModule, NgForm } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from '../../Store/Effects/Company.effects';
import { companyReducer } from '../../Store/Reducers/Company.reducer';
import { CompaniesComponent } from '../../Components/Company Components/companies/companies.component';
import { CompanyCreateComponent } from '../../Components/Company Components/company-create/company-create.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('companies', companyReducer),
    EffectsModule.forFeature([CompanyEffects])
  ],
  providers: [CompanyService],
  bootstrap: [],

})
export class CompanyModule { }
