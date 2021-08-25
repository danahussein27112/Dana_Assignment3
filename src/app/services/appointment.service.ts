import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Appointments } from "../models/appointments";
import { LoggingService } from "./logging.service";
import { environment } from "src/environments/environment";
import { map, tap } from "rxjs/operators";


@Injectable({
    providedIn:'root'
})
export class AppointmentService{
    private appointmentCreatedSource = new Subject<string>();

    appointmentCreated$ = this.appointmentCreatedSource.asObservable();
    constructor(private logService:LoggingService, private httpClient:HttpClient){

    }
    getAppointment():Observable<Appointments[]>{
        return this.httpClient.get<Appointments[]>(`${environment.WebApiUrl}/appointments.json`)

    }
    createAppointment(appointmentDate:string,name:string,id:number):Observable<Appointments>{
     return this.httpClient.post<Appointments>(`${environment.WebApiUrl}/appointments.json`,{appointmentDate,name,id});
    }
    cancleAppointment(id:string){
return this.httpClient.delete(`${environment.WebApiUrl}/appointments/${id}`)
    }

    save(appointment:any) {
      let appointments = JSON.parse(localStorage.getItem('appointments')||'{}');
      appointment.push('appointments');
  
      localStorage.setItem('appointments', JSON.stringify(appointments));
      this.appointmentCreatedSource.next(appointment);
    }
    getList() {
        return JSON.parse(localStorage.getItem('appointments')||'{}');
      }
  }
