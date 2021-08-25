import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {

  createForm:FormGroup;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
      }),      
      spi: new FormControl(),    
      email: new FormControl(null, [Validators.required, Validators.email,this.restrictedEmails]),
      notes: new FormControl(),
      salary:new FormControl( ),
      phoneNum:new FormControl( ),
      Address:new FormControl()
    })
  }

  onSubmit(){
    if(!this.createForm.valid)
      return;

    let doctor = new Doctor(this.doctorService.doctors.length + 1, this.createForm.value.fullName.firstName, this.createForm.value.fullName.lastName,  this.createForm.value.notes,this.createForm.value.salary,this.createForm.value.spi,this.createForm.value.phoneNum,this.createForm.value.Address);

    doctor.email = this.createForm.value.email;
    doctor.spi = this.createForm.value.spi;
    doctor.Address = this.createForm.value.Address;

        this.doctorService.addDoctor(doctor);

    this.createForm.reset();
  }

  restrictedEmails(control:FormControl){ 
    let emails = ['test@test.com', 'aa@aa.com']
      if(emails.indexOf(control.value) > -1){
        return {restrictedEmail: true}
      }
  
      return null;      
  }
}
  
