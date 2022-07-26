import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './company.service';
import { FormsModule, NgForm } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from '../../Store/Effects/Company.effects';
import { companyReducer } from '../../Store/Reducers/Company.reducer';
import { CompanyRoutingModule } from './company.routing.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forFeature([CompanyEffects]),
    CompanyRoutingModule
  ],
  providers: [CompanyService],
  bootstrap: [],

})
export class CompanyModule { }
