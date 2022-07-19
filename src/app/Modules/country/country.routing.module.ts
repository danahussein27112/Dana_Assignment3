import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "src/app/Components/Country Components/countries/countries.component";
import { CountryCreateComponent } from "src/app/Components/Country Components/country-create/country-create.component";
import { CountryDetailComponent } from "src/app/Components/Country Components/country-detail/country-detail.component";
import { CountryResolver } from "src/app/Store/Resolver/CountryResolver";

const routes: Routes = [
    { path: 'countries', component: CountriesComponent,resolve: {countries: CountryResolver }},
    {path:'country-detail/:id', component:CountryDetailComponent},
    {path :'countries/create-country',component:CountryCreateComponent},

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CountryRoutingModule { }