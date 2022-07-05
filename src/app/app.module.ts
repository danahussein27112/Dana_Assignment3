import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers,reducers} from './Store/Reducers';
import { CompanyCreateComponent } from './Components/company-create/company-create.component';
import { CompaniesComponent } from './Components/companies/companies.component';
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
const routes = [
  {
    path: 'companies',
    component: CompaniesComponent,
    resolve: {
      companies: CompanyResolver
    }
  },
  {path: 'create-company', component: CompanyCreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  ,
    CountryModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forRoot([CompanyEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
        
  ],
  providers: [CompanyResolver,CompanyService],
  bootstrap: [AppComponent]
})


export class AppModule { 



}