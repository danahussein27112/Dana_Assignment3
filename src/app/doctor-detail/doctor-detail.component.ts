import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

 doctor:Doctor;
 
  constructor(private router:Router, private doctorService:DoctorService, private route:ActivatedRoute) {
    this.doctor = new Doctor(0,'','','',0,'',0,'');
   }

  ngOnInit(): void {
       let allowEdit = this.route.snapshot.queryParams['allowEdit'];

      this.route.params.subscribe((params:Params)=>{
        this.doctor = this.doctorService.doctors.find(p => p.id == +params['id'] ) as Doctor;
        
      })
    
  }

  onEdit(id:number){
    this.router.navigate(['/doctor', id, 'edit' ], {queryParams: {allowEdit: true}});
  }
  
}
 
