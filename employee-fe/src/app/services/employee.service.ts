import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../models/employee"
// import . from '../../'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private endpoint = 'https://127.0.0.1:44346/api/Employees/';

  constructor(private http: HttpClient) { }

  // Get all employees
  getAllEmployees(): Observable<any>{
    return this.http.get(this.endpoint);
  }

  // POST : add a new employee
  createEmployee(employee: Employee): Observable<object> {
    return this.http.post(this.endpoint, employee);
  }

  // GET a single employee
  getEmployee(id: number): Observable<any>{
    return this.http.get(this.endpoint + id);
  }

  // PUT - update a employee
  updateEmployee(id: number, payload : any): Observable<object> {
    return this.http.put(this.endpoint + id, payload );
  }

  // DELETE - delete a employee
  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(this.endpoint + id);
  }

  // DELETE all employees
  deleteAllEmployees(): Observable<any> {
    return this.http.delete(this.endpoint);
  }

}
