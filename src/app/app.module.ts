import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { PatientItemComponent } from './patient-item/patient-item.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsHeaderComponent } from './patients-header/patients-header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AppHiddenDirective } from './directives/app-hidden.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HomeComponent } from './home/home.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { AppRoutingModule } from './app.routing.module';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { DoctorsComponent } from './doctor/doctor.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorItemComponent } from './doctor-item/doctor-item.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorsHeaderComponent } from './doctor-header/doctor-header.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';




@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientItemComponent,
    PatientsHeaderComponent,
    HighlightDirective,
    AppHiddenDirective,
    ShortenPipe,
    HomeComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientCreateComponent,
    DoctorsComponent,
    DoctorCreateComponent,
    DoctorDetailComponent,
    DoctorItemComponent,
    DoctorEditComponent,
    DoctorsHeaderComponent,
    AppointmentsComponent,
    AppointmentListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule  ],
    
  providers: [ 
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
