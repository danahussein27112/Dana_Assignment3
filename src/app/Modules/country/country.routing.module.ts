import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEditCountryComponent } from "src/app/Components/Country Components/add-edit-country/add-edit-country.component";
import { CountriesComponent } from "src/app/Components/Country Components/countries/countries.component";
import { CountryResolver } from "src/app/Store/Resolver/CountryResolver";

const routes: Routes = [
    { path: 'countries', component: CountriesComponent,resolve: {countries: CountryResolver }},
    {path:'country-detail/:id', component:AddEditCountryComponent},
    {path :'countries/create-country',component:AddEditCountryComponent},

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CountryRoutingModule { }