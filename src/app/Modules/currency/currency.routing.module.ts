import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEditCurrencyComponent } from "src/app/Components/Currency Components/add-edit-currency/add-edit-currency.component";
import { CurrenciesComponent } from "src/app/Components/Currency Components/currencies/currencies.component";

const routes: Routes = [
    {path :'create-currency',component:AddEditCurrencyComponent},
    {path : 'currencies',component:CurrenciesComponent},
    {path:'currency-detail/:id', component:AddEditCurrencyComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CurrencyRoutingModule { }