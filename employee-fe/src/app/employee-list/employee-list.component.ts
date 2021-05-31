import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Employee } from "../models/employee";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Observable<Employee[]> | undefined;
  success : boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployeesData();
  }

  loadEmployeesData(){
    this.employees = this.employeeService.getAllEmployees();
  }

  deleteEmployee(id: number  |undefined){
    this.employeeService.deleteEmployee(Number(id))
      .subscribe(
        data => {
          this.success = true;
          this.loadEmployeesData();
        },
        error => {
          console.log( "Deletion error: " + error);
        }
      );
  }

  deleteAllEmployees(){
    this.employeeService.deleteAllEmployees()
      .subscribe(
        data => {
          this.success = true;
          this.loadEmployeesData();
        },
        error => {
          console.log("Deletion error: " + error);
        }
      );

  }
}
