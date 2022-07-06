import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from './company.model';
import { CompanyViewModel } from './company.ViewModel';


@Injectable()
export class CompanyService {
  
  constructor( public http: HttpClient) {
  }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>('https://localhost:44373/Company');
  }
  getCompany(id: number)
  {
      return this.http.get('https://localhost:44373/company/id?' + id); 
  }

  create(company: CompanyViewModel): Observable<CompanyViewModel> {
    return this.http.post<CompanyViewModel>('https://localhost:44373/Company', company);
  }

  delete(Id: number): Observable<any> {
    return this.http.delete('https://localhost:44373/Company' + Id);
  }

  update(Id:  number|string, changes: Partial<Company>): Observable<any> {
    return this.http.put('/api/Company/' + Id, changes);
  }
}