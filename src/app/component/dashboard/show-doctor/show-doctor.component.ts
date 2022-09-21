import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {

  displayInfo : boolean = false;
  doctorArr : Doctor[] = [];
  doctorObj !: Doctor;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.displayInfo = false;
    this.doctorArr = [];
    this.getAllDoctors();
    this.doctorObj = {
      doctorId: 0,
      name: '',
      gender: '',
      age: 0,
      specialization: '',
      numberOfPatientsvisited: 0
    };
  }

  getAllDoctors() {
    this.dataService.getAllDoctor().subscribe(res => {
      this.doctorArr = res;
    }, err => {
      console.log('Failed to get all doctors');
    })
  }

  onDoctorSelect(event : any) {
    console.log(event.target.value);
    this.doctorArr.forEach(element => {
      if(Number(element.doctorId) === Number(event.target.value)) {
        this.doctorObj = element;
        this.displayInfo = true;
      }
    });
    console.log(this.doctorObj);
  }

}
