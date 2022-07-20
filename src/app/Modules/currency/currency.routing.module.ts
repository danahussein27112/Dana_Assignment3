import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CurrenciesComponent } from "src/app/Components/Currency Components/currencies/currencies.component";
import { CurrencyCreateComponent } from "src/app/Components/Currency Components/currency-create/currency-create.component";
import { CurrencyDetailComponent } from "src/app/Components/Currency Components/currency-detail/currency-detail.component";

const routes: Routes = [
    {path :'create-currency',component:CurrencyCreateComponent},
    {path : 'currencies',component:CurrenciesComponent},
    {path:'currency-detail/:id', component:CurrencyDetailComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CurrencyRoutingModule { }