import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Department } from '../common/department';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  empurl = "http://localhost:8080/api/employees"
  deptur1 = "http://localhost:8080/api/departments"
  constructor(private httpClient : HttpClient) { }

  getAllEmployee() : Observable<Employee[]> {
    //console.log(this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees)))

    return this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees))
  }
  getAllDepartments() :Observable<Department[]> {
    // console.log(this.httpclient.get<getDepartmentResponse>(this.depturl).pipe(map(response =>response._embedded.departments)))
    return this.httpClient.get<getDepartmentResponse>(this.deptur1).pipe(map(response =>response._embedded.departments))
  }
}
interface getEmployeeResponse {
  _embedded : {
    employees : Employee[]
  }
}

interface getDepartmentResponse{
  _embedded :{
    departments : Department[]
  }
}