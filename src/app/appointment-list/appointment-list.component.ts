import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Appointments } from '../models/appointments';
import { AppointmentService } from '../services/appointment.service';
import { AppointmentsComponent } from '../appointments/appointments.component';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
public loading=true;
public errMsg:string
public successMsg:string
public appointments:Appointments[]
public coulmns=['appointmentDate','name','cancel'];
  constructor(private appointmentService:AppointmentService) { 

  }

  ngOnInit(): void {
    this.appointmentService.getAppointment().subscribe((appointments: Appointments[]) => {

      this.appointments =appointments;  
      this.loading = false;
        },   
      (error: ErrorEvent) => {  
      this.errMsg = error.error.message; 
      this.loading = false})
  }
  cancelAppointment (id: string) { 
    this.appointmentService.cancleAppointment (id).

    pipe(
    
    mergeMap (() => this.appointmentService.getAppointment()) )
    
    .subscribe((appointments:Appointments[]) => {
    
    this.appointments =appointments;
    
    this.successMsg ='Successfully cancelled the appointment'
    
    }, (error: ErrorEvent) => {
    
    this.errMsg =error.error.message;
    
    });
 }}
