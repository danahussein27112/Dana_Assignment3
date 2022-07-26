import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CompanyModule } from './Modules/company/company.module';
import { CompanyResolver } from './Store/Resolver/Company.resolver';
import { metaReducers, reducers } from './Store/Reducers';
import { CountryResolver } from './Store/Resolver/CountryResolver';
import { CountryModule } from './Modules/country/country.module';
import { CurrencyModule } from './Modules/currency/currency.module';
import { CurrencyCountriesModule } from './Modules/CurrencyCountries/currencyCountries.module';
import { CompaniesComponent } from './Components/Company Components/companies/companies.component';
import { CurrencyCountreisComponent } from './Components/currency-countreis/currency-countreis.component';
import { RouterModule } from '@angular/router';
const routes = [
  {path:'',component : CompaniesComponent },
    { path: 'companies', loadChildren: () => import('./Modules/company/company.module').then(m => m.CompanyModule) },
    { path: 'countries', loadChildren: () => import('./Modules/country/country.module').then(m => m.CountryModule) },
    { path: 'currencies', loadChildren: () => import('./Modules/currency/currency.module').then(m => m.CurrencyModule) },
    { path: 'currency/countries/:id', component: CurrencyCountreisComponent }
  ];
  

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
    RouterModule.forRoot(routes),
  ],
  providers: [CompanyResolver, CountryResolver],
  bootstrap: [AppComponent],

})
export class AppRoutingModule { }