import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './Store/Reducers';
import { CompaniesComponent } from './Components/Company Components/companies/companies.component';
import { CompanyResolver } from './Store/Resolver/Company.resolver';
import { CountryModule } from './Modules/country/country.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './Modules/company/company.service';
import { CountriesComponent } from './Components/Country Components/countries/countries.component';
import { CountryService } from './Modules/country/country.service';
import { CountryResolver } from './Store/Resolver/CountryResolver';
import { CurrenciesComponent } from './Components/Currency Components/currencies/currencies.component';
import { HomeComponent } from './Components/home/home.component';
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
import { AddEditCompanyComponent } from './Components/Company Components/add-edit-company/add-edit-company.component';
import { AddEditCountryComponent } from './Components/Country Components/add-edit-country/add-edit-country.component';
import { AddEditCurrencyComponent } from './Components/Currency Components/add-edit-currency/add-edit-currency.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CurrenciesComponent,
    CountriesComponent,
    CurrencyCountreisComponent,
    HomeComponent,
    AddEditCompanyComponent,
    AddEditCountryComponent,
    AddEditCurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CountryModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,
    CompanyModule,
    CurrencyModule,
    CurrencyCountriesModule,
    StoreModule.forFeature('currencyCountries', CurrencyCountriesReducer),
    EffectsModule.forRoot([CurrencyCountriesEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    MatSortModule,
    RouterModule,


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