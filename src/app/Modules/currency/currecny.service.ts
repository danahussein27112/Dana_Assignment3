import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from './currency.model';


@Injectable()
export class CurrencyService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAll(): Observable<Currency[]> {
    return this.http.get<Currency[]>('/api/Currency');
  }

  create(currency: Currency): Observable<Currency> {
    return this.http.post<Currency>('/api/Currency', currency);
  }

  delete(Id: string): Observable<any> {
    return this.http.delete('/api/Currency/' + Id);
  }

  update(Id:  number, changes: Partial<Currency>): Observable<any> {
    return this.http.put('/api/Currency/' + Id, changes);
  }
}