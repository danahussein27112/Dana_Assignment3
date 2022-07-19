import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompaniesComponent } from "src/app/Components/Company Components/companies/companies.component";

const routes: Routes = [
    {
      path: 'companies',
      component: CompaniesComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CompanyRoutingModule { }