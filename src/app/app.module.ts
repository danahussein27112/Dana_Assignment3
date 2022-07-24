import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './Store/Reducers';
import { CompanyCreateComponent } from './Components/Company Components/company-create/company-create.component';
import { CompaniesComponent } from './Components/Company Components/companies/companies.component';
import { CompanyResolver } from './Store/Resolver/Company.resolver';
import { CountryModule } from './Modules/country/country.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { companyReducer } from './Store/Reducers/Company.reducer';
import { CompanyService } from './Modules/company/company.service';
import { CompanyEffects } from './Store/Effects/Company.effects';
import { CompanyDetailComponent } from './Components/Company Components/company-detail/company-detail.component';
import { CountryCreateComponent } from './Components/Country Components/country-create/country-create.component';
import { CountryDetailComponent } from './Components/Country Components/country-detail/country-detail.component';
import { CountriesComponent } from './Components/Country Components/countries/countries.component';
import { CountryService } from './Modules/country/country.service';
import { countryReducer } from './Store/Reducers/Country.reducer';
import { CountryEffects } from './Store/Effects/Country.effects';
import { CountryResolver } from './Store/Resolver/CountryResolver';
import { CurrenciesComponent } from './Components/Currency Components/currencies/currencies.component';
import { CurrencyCreateComponent } from './Components/Currency Components/currency-create/currency-create.component';
import { CurrencyDetailComponent } from './Components/Currency Components/currency-detail/currency-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { CurrencyReducer } from './Store/Reducers/Currency.reducer';
import { CurrencyEffects } from './Store/Effects/Currency.effects';
import { CurrencyService } from './Modules/currency/currecny.service';
import { CompanyModule } from './Modules/company/company.module';
import { CurrencyCountreisComponent } from './Components/currency-countreis/currency-countreis.component';
import { CurrencyModule } from './Modules/currency/currency.module';
import { CurrencyCountriesModule } from './Modules/CurrencyCountries/currencyCountries.module';
import { CurrencyCountriesEffects } from './Store/Effects/CurrencyCountreis.effects';
import { CurrencyCountriesReducer } from './Store/Reducers/CurrencyCountries.reducer';
import { CurrencyCountriesService } from './Modules/CurrencyCountries/currencyCountries.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


const routes = [

  { path: 'companies', loadChildren: () => import('./Modules/company/company.module').then(m => m.CompanyModule) },
  { path: 'countries', loadChildren: () => import('./Modules/country/country.module').then(m => m.CountryModule) },
  { path: 'currencies', loadChildren: () => import('./Modules/currency/currency.module').then(m => m.CurrencyModule) },
  { path: 'currency/countries/:id', component: CurrencyCountreisComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyCreateComponent,
    CompanyDetailComponent,
    CountryCreateComponent,
    CountryDetailComponent,
    CurrenciesComponent,
    CountriesComponent,
    CurrencyCreateComponent,
    CurrencyDetailComponent,
    CurrencyCountreisComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CountryModule,
    CompanyModule,
    CurrencyModule,
    CurrencyCountriesModule,
    StoreModule.forFeature('company', companyReducer),
    StoreModule.forFeature('country', countryReducer),
    StoreModule.forFeature('currency', CurrencyReducer),
    StoreModule.forFeature('currencyCountries', CurrencyCountriesReducer),
    EffectsModule.forRoot([CurrencyEffects]),
    EffectsModule.forRoot([CurrencyCountriesEffects]),
    EffectsModule.forRoot([CountryEffects]),
    EffectsModule.forRoot([CompanyEffects]),
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

  ],
  providers: [CompanyResolver,
    CompanyService,
    CountryService,
    CountryResolver,
    CurrencyService,
    CurrencyCountriesService],
  bootstrap: [AppComponent]
})

export class AppModule {
}