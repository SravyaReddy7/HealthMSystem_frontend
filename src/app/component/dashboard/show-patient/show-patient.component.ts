import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {
  patientId !: number;
  displayInfo : boolean = false;
  emptyMsgInfo : boolean = false;
  patientObj !: Patient;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.displayInfo = false;
    this.emptyMsgInfo = false;
    this.patientObj = {
      patientId: 0,
      name: '',
      doctorName: '',
      doctorId: 0,
      visitDate: '',
      prescription:''
    };
  }

  findPatient() {
    this.ngOnInit();
    if(this.patientId) {
      this.dataService.getPatientById(this.patientId).subscribe(res => {
        if(!res.patientId || !res.doctorId) {
          this.emptyMsgInfo = true;
        } else {
          this.displayInfo = true;
          this.patientObj = res;
        }
      }, err => {
        this.emptyMsgInfo = true;
      })
    }
  }

}
