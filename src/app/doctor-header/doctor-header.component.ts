import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css']
})
export class DoctorsHeaderComponent implements OnInit {

  @Input()

  notes:string;
  phoneNum:number;
  @Output()
 doctorsAdded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  addDoctor(firstName:HTMLInputElement, lastName:HTMLInputElement){
    this.doctorsAdded.emit(new Doctor(0,firstName.value, lastName.value, '',0,'',+0,''));

 }
}
