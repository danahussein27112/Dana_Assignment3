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
import { metaReducers,reducers } from './Store/Reducers';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CompanyModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),

    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [CompanyResolver],
  bootstrap: [AppComponent],

})
export class AppModule { }