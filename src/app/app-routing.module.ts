import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { CompanyModule } from './Modules/company/company.module';
import { CompanyResolver } from './Store/Resolver/Company.resolver';
import { metaReducers, reducers } from './Store/Reducers';
import { CountryResolver } from './Store/Resolver/CountryResolver';
import { CountryModule } from './Modules/country/country.module';
import { CurrencyModule } from './Modules/currency/currency.module';
import { CurrencyCountriesModule } from './Modules/CurrencyCountries/currencyCountries.module';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CompanyModule,
    CountryModule,
    CurrencyModule,
    CurrencyCountriesModule,
    HttpClientModule,
    EffectsModule.forRoot([EffectsModule]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),

  ],
  providers: [CompanyResolver, CountryResolver],
  bootstrap: [AppComponent],

})
export class AppModule { }