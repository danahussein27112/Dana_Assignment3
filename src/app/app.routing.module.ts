import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PatientCreateComponent } from "./patient-create/patient-create.component";
import { PatientDetailComponent } from "./patient-detail/patient-detail.component";
import { PatientEditComponent } from "./patient-edit/patient-edit.component";
import { PatientsComponent } from "./patients/patients.component";
import { DoctorsComponent } from "./doctor/doctor.component";
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorEditComponent } from "./doctor-edit/doctor-edit.component";
import { AppointmentListComponent } from "./appointment-list/appointment-list.component";
import { DoctorDetailComponent } from "./doctor-detail/doctor-detail.component";
import { AppointmentsComponent } from "./appointments/appointments.component";






const appRoutes:Route[] = [
   {path:'', component: HomeComponent},
   {path:'patients', component: PatientsComponent, children: 
   [
    
    {path:'create', component: PatientCreateComponent}, 
     {path:':id', component: PatientDetailComponent},
     {path:':id/edit', component: PatientEditComponent},
     
   ]
   },
   {path:'doctor', component: DoctorsComponent, children: [
    {path:'create', component: DoctorCreateComponent},
    {path:':id', component: DoctorDetailComponent},
    {path:':id/edit', component: DoctorEditComponent}

   ]},
   {path:'appointments', component: AppointmentsComponent},
     {path:'appointemnts/list',component:AppointmentListComponent}
 ];

@NgModule(
   {
    imports:[
      RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
   }
)
export class   AppRoutingModule{

}