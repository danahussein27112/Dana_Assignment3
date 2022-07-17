import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from './currency.model';
import { CurrencyViewModel } from './currencyViewModel';


@Injectable()
export class CurrencyService {

  private selectedCurrency = new Subject<any>();
  currencySelected = this.selectedCurrency.asObservable();

  constructor(private http: HttpClient) {}

  getCurrencies(){
      return this.http.get('https://localhost:44373/Currency'); 
  }

  getcurrecny(id: number)
  {
      return this.http.get('https://localhost:44373/Currency/id?' + id); 
  }

  selectcurrecny(currecny: Currency) {
      this.selectedCurrency.next(currecny)
  }

  savecurrecny(currecny: CurrencyViewModel) 
  {
      return this.http.post<CurrencyViewModel>('https://localhost:44373/Currency', currecny);
  }

  update(currecny: Currency) 
  {
      return this.http.post<Currency>('' + currecny.id, currecny);
  }

  delete(id:number) 
  {
      return this.http.delete<Currency>('' + id);
  }    
}