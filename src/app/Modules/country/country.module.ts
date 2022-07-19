import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';
import { CountryEffects } from '../../Store/Effects/Country.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { countryReducer } from 'src/app/Store/Reducers/Country.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { CountriesComponent } from 'src/app/Components/Country Components/countries/countries.component';
import { CountryCreateComponent } from 'src/app/Components/Country Components/country-create/country-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature('countries', countryReducer),
    EffectsModule.forFeature([CountryEffects]),

  ],

  providers: [CountryService],
  bootstrap: [],

})
export class CountryModule { }
