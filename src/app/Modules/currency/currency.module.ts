import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from './currecny.service';
import { CurrencyReducer } from 'src/app/Store/Reducers/Currency.reducer';
import { CurrencyEffects } from 'src/app/Store/Effects/Currency.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('currencies', CurrencyReducer),
    EffectsModule.forFeature([CurrencyEffects]),
  ],  
  providers: [CurrencyService]

})
export class CurrencyModule { }
