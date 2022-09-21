import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/model/patient';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  @ViewChild('successModal')
  successModal: ElementRef | undefined;

  @ViewChild('failModal')
  failModal: ElementRef | undefined;

  patientRegistrationForm !: FormGroup;
  doctors : any[] = [];
  patientObj !: Patient;
  response : string = '';

  constructor(private fb : FormBuilder, private dataService : DataService) { }

  ngOnInit(): void {

    this.patientRegistrationForm = this.fb.group({
      name : ['', [Validators.required]],
      doctor : ['', [Validators.required]],
      date : ['', [Validators.required]],
      prescription : ['', [Validators.required]]
    });

    this.patientObj = {
      patientId : 0,
      name : '',
      doctorName : '',
      doctorId : 0,
      visitDate : '',
      prescription:''
    };
    this.response = '';
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.dataService.getAllDoctor().subscribe(res => {
      this.doctors = res;
      console.log(this.doctors);
    }, err => {
      console.log(err);
    })
  }

  registerPatient() {
    this.patientObj.name = this.patientRegistrationForm.value.name;
    this.patientObj.doctorId  = this.patientRegistrationForm.value.doctor;
    this.patientObj.visitDate = this.patientRegistrationForm.value.date;
    this.patientObj.prescription = this.patientRegistrationForm.value.prescription;
    this.getDoctorName(this.patientObj.doctorId);

    this.dataService.addPatient(this.patientObj).subscribe(res => {
      this.response = "Registration of patient is successful";
      this.successModal?.nativeElement.click();
    }, err => {
      this.response = "Failed to register a patient";
      console.log(err);
      this.failModal?.nativeElement.click();
    })
  }

  getDoctorName(id : number) {
    this.doctors.forEach(element => {
      if(Number(element.doctorId) === Number(id)) {
        this.patientObj.doctorName = element.name;
      }
    });
  }

}
