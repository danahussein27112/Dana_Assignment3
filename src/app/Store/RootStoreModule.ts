import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CountryModule } from '../Modules/country/country.module';
import { reducers } from './Reducers';
import { companyReducer } from './Reducers/Company.reducer';
import { countryReducer } from './Reducers/Country.reducer';
 
@NgModule({
  imports: [
    CommonModule,
    
    StoreModule.forFeature('company', companyReducer),
    StoreModule.forFeature('country', countryReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: []
})
export class RootStoreModule {}