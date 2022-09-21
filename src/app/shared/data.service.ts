import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  docUrl : string = "http://localhost:9091/doctor/";
  patientUrl : string = "http://localhost:9091/patient/";
  constructor(private http : HttpClient) { }
  
  addPatient(patient : Patient) : Observable<Patient>{
    return this.http.post<Patient>(this.patientUrl+'add',patient);
  }

  getPatientById(id : number) : Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl+id);
  }

  addDoctor(doc : Doctor) : Observable<Doctor> {
    return this.http.post<Doctor>(this.docUrl+'add',doc);
  }

  getAllDoctor() : Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.docUrl+'all');
  }

  getDoctorById(id : number) : Observable<Doctor> {
    return this.http.get<Doctor>(this.docUrl+id);
  }


  
}
