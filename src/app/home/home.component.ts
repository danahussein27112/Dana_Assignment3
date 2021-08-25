import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, } from 'rxjs';
import {filter, map} from 'rxjs/operators';
import { Appointments } from '../models/appointments';
import { AppointmentService } from '../services/appointment.service';
import { AppointmentsComponent } from '../appointments/appointments.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appointments :Appointments[];
clientName:string
date:string
  constructor(private appointmentService: AppointmentService,private router :Router) {
    appointmentService.appointmentCreated$.subscribe(appointment => {
      this.loadAppointments();
    });
  }

  loadAppointments() {
   return this.appointmentService.getList();
  }

  ngOnInit() {
    this.loadAppointments();
  }
    onLoadAppointments(){
     this.router.navigate(['/appointments']);
}}

 // onLoadPatients(){
    //  this.router.navigate(['/patients']);
  
  //onLoadDoctors(){
   // this.router.navigate(['/doctor']);

