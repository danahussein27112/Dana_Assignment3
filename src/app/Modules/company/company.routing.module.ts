import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEditCompanyComponent } from "src/app/Components/Company Components/add-edit-company/add-edit-company.component";
import { CompaniesComponent } from "src/app/Components/Company Components/companies/companies.component";
import { CompanyResolver } from "src/app/Store/Resolver/Company.resolver";

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent, resolve: { companies: CompanyResolver } },
  { path: 'company-detail/:id', component: AddEditCompanyComponent },
  { path: 'create-company', component: AddEditCompanyComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {

}