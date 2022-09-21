import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/model/doctor';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  @ViewChild('successModal')
  successModal: ElementRef | undefined;

  @ViewChild('failModal')
  failModal: ElementRef | undefined;
  response : string ='';
  doctorRegistrationForm !: FormGroup;
  doctorObj !: Doctor;
  genderArr : string[] = ['Male', 'Female', 'Others'];
  constructor(private fb : FormBuilder, private dataService : DataService) { }

  ngOnInit(): void {
    this.doctorRegistrationForm = this.fb.group({
      name : ['', [Validators.required]],
      gender : ['', [Validators.required]],
      age : ['', [Validators.required]],
      specialization : ['', [Validators.required]],
      numberofpatientsvisited :['', [Validators.required]]
    });

    this.doctorObj = {
      doctorId : 0,
      name : '',
      gender : '',
      age : 0,
      specialization : '',
      numberOfPatientsvisited : 0,
    };
    this.response = '';
  }

  registerDoctor() {
    this.doctorObj.name = this.doctorRegistrationForm.value.name;
    this.doctorObj.gender = this.doctorRegistrationForm.value.gender;
    this.doctorObj.age = this.doctorRegistrationForm.value.age;
    this.doctorObj.specialization = this.doctorRegistrationForm.value.specialization;
    this.doctorObj. numberOfPatientsvisited= this.doctorRegistrationForm.value.numberOfPatientsvisited;

    this.dataService.addDoctor(this.doctorObj).subscribe(res => {
      this.response = "Registration of doctor is successful";
      this.successModal?.nativeElement.click();
    }, err => {
      this.response = "Failed to register a doctor";
      console.log(err);
      this.failModal?.nativeElement.click();
    })

  }

}
