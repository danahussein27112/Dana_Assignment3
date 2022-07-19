import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './Store/Reducers';
import { CompanyCreateComponent } from './Components/Company Components/company-create/company-create.component';
import { CompaniesComponent } from './Components/Company Components/companies/companies.component';
import { CompanyResolver } from './Store/Resolver/Company.resolver';
import { CountryModule } from './Modules/country/country.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { environment } from 'src/environments/environment';
import { CurrenciesComponent } from './Components/Currency Components/currencies/currencies.component';
import { CurrencyCreateComponent } from './Components/Currency Components/currency-create/currency-create.component';
import { CurrencyDetailComponent } from './Components/Currency Components/currency-detail/currency-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { CurrencyReducer } from './Store/Reducers/Currency.reducer';
import { CurrencyEffects } from './Store/Effects/Currency.effects';
import { CurrencyService } from './Modules/currency/currecny.service';
import { CompanyModule } from './Modules/company/company.module';
const routes = [
  { path: 'companies',component: CompaniesComponent, resolve: {  companies: CompanyResolver}
  },
  { path: 'create-company', component: CompanyCreateComponent },
  { path: 'countries', component: CountriesComponent,resolve: {countries: CountryResolver }},
  {path :'countries/create-country',component:CountryCreateComponent},
  {path :'create-currency',component:CurrencyCreateComponent},
  {path : 'currency',component:CurrenciesComponent},
  {path:'company-detail/:id', component:CompanyDetailComponent},
  {path:'country-detail/:id', component:CountryDetailComponent},
  {path:'currecny-detail/:id', component:CurrencyDetailComponent},
  {path: 'companies', loadChildren: () => import('./Modules/company/company.module').then(m => m.CompanyModule)},
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountryModule,
    CompanyModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forRoot([CompanyEffects]),
    StoreModule.forRoot({ CompanyState: companyReducer }),
    StoreModule.forRoot({ CountryState: countryReducer }),
    StoreModule.forFeature('country', countryReducer),
    EffectsModule.forRoot([CountryEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,  }),
    StoreModule.forFeature('currency', CurrencyReducer),
    EffectsModule.forRoot([CurrencyEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),

  ],
  providers: [CompanyResolver, CompanyService, CountryService, CountryResolver,CurrencyService],
  bootstrap: [AppComponent]
})


export class AppModule {



}