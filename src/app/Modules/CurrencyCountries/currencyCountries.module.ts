import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CurrencyCountriesEffects } from "src/app/Store/Effects/CurrencyCountreis.effects";
import { CurrencyCountriesReducer } from "src/app/Store/Reducers/CurrencyCountries.reducer";
import { CurrencyCountriesService } from "./currencyCountries.service";

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature('currencyCountries', CurrencyCountriesReducer),
    EffectsModule.forFeature([CurrencyCountriesEffects]),
  ],

  providers: [CurrencyCountriesService],
  bootstrap: [],
})
export class CurrencyCountriesModule { }
