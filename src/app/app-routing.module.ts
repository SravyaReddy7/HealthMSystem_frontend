import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './component/dashboard/add-doctor/add-doctor.component';
import { AddPatientComponent } from './component/dashboard/add-patient/add-patient.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ShowDoctorComponent } from './component/dashboard/show-doctor/show-doctor.component';
import { ShowPatientComponent } from './component/dashboard/show-patient/show-patient.component';
import{ HomeComponent } from './component/dashboard/home/home.component';
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
   children: [
    {path: 'add-patient', component: AddPatientComponent},
    {path: 'show-patient', component: ShowPatientComponent},
    {path: 'add-doctor', component: AddDoctorComponent},
    {path: 'show-doctor', component: ShowDoctorComponent},
    {path: 'Home', component: HomeComponent},
   ]},
   { path : '', redirectTo:'dashboard/add-patient', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
