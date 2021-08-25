import { Component, OnInit } from '@angular/core';
import { Appointments } from '../models/appointments';
import { AppointmentService } from '../services/appointment.service';
  

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  model = new Appointments();

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  save() {
    return this.appointmentService.save(this.model);
  }
}
