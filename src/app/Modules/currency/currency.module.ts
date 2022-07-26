import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from './currecny.service';
import { CurrencyReducer } from 'src/app/Store/Reducers/Currency.reducer';
import { CurrencyEffects } from 'src/app/Store/Effects/Currency.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CurrencyRoutingModule } from './currency.routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   StoreModule.forFeature('currency', CurrencyReducer),
    EffectsModule.forFeature([CurrencyEffects]),
    CurrencyRoutingModule
  ],
  providers: [CurrencyService]

})
export class CurrencyModule { }
