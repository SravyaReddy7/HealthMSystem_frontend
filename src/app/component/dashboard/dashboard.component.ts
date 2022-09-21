import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  home:boolean = false;
  addPatient: boolean = false;
  showPatient: boolean = false;
  addDoctor: boolean = false;
  showDoctor: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.showAddPatient();
  }

  setOff() {
   this.home = false;
    this.addPatient = false;
    this.showPatient = false;
    this.addDoctor = false;
    this.showDoctor = false;
  }
//show Home section
showHome(){
  this.setOff();
  this.home = true;
  this.router.navigate(['dashboard/Home']);
}
  
  // show add patient section
  showAddPatient() {
    this.setOff();
    this.addPatient = true;
    this.router.navigate(['dashboard/add-patient']);
  }

  // show add doctor section
  showAddDoctor() {
    this.setOff();
    this.addDoctor = true;
    this.router.navigate(['dashboard/add-doctor']);
  }

  // show patient section
  showPatientSection() {
    this.setOff();
    this.showPatient = true;
    this.router.navigate(['dashboard/show-patient']);
  }

  // show doctor section
  showDoctorSection() {
    this.setOff();
    this.showDoctor = true;
    this.router.navigate(['dashboard/show-doctor']);
  }


}
