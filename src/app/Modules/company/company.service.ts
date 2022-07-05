import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from './company.model';


@Injectable()
export class CompanyService {
  
  constructor( public http: HttpClient) {
  }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>('https://localhost:44373/Company');
  }

  create(company: Company): Observable<Company> {
    return this.http.post<Company>('/api/Company', company);
  }

  delete(Id: number): Observable<any> {
    return this.http.delete('/api/Company/' + Id);
  }

  update(Id:  number|string, changes: Partial<Company>): Observable<any> {
    return this.http.put('/api/Company/' + Id, changes);
  }
}