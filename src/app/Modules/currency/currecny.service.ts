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
      return this.http.get('https://localhost:44373/Currency/id?id=' + id); 
  }

  selectcurrecny(currecny: Currency) {
      this.selectedCurrency.next(currecny)
  }

  savecurrecny(currecny: CurrencyViewModel) 
  {
      return this.http.post<CurrencyViewModel>('https://localhost:44373/Currency', currecny);
  }

  update(Id:  number, currecny:CurrencyViewModel):Observable<CurrencyViewModel> {
    return this.http.put<CurrencyViewModel>('https://localhost:44373/currency/?id='+Id,currecny);
  }  
  delete(Id: number): Observable<any> {
    return this.http.delete('https://localhost:44373/Currency/Delete/id?' + 'id='+Id);
  }

}