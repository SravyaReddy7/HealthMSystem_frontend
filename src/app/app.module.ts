import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/dashboard/home/home.component';

import { AddPatientComponent } from './component/dashboard/add-patient/add-patient.component';
import { AddDoctorComponent } from './component/dashboard/add-doctor/add-doctor.component';
import { ShowDoctorComponent } from './component/dashboard/show-doctor/show-doctor.component';
import { ShowPatientComponent } from './component/dashboard/show-patient/show-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    DashboardComponent,
    AddPatientComponent,
    AddDoctorComponent,
    ShowDoctorComponent,
    ShowPatientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
