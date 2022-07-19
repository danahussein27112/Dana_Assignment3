import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompaniesComponent } from "src/app/Components/Company Components/companies/companies.component";
import { CompanyCreateComponent } from "src/app/Components/Company Components/company-create/company-create.component";
import { CompanyDetailComponent } from "src/app/Components/Company Components/company-detail/company-detail.component";
import { CompanyResolver } from "src/app/Store/Resolver/Company.resolver";

const routes: Routes = [
    {path: 'companies', component: CompaniesComponent , resolve: {  companies: CompanyResolver}},
    {path:'company-detail/:id', component:CompanyDetailComponent},
    { path: 'create-company', component: CompanyCreateComponent },

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CompanyRoutingModule { }