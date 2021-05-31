import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { Employee } from "../models/employee";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  ////@ts-ignore
  // employee = new BehaviorSubject<employee | null>(null);
  // employee: Observable<employee> | undefined;
  employee : Employee | undefined;
  employee_id : number | undefined;
  success : boolean = false;
  trip_types = ['One way', 'Round trip', 'Multiple destinations'];

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.employee_id = Number( params.get("id") );
      }
    );
    this.loadEmployeeData();
  }

  loadEmployeeData(){
    this.employeeService.getEmployee( Number(this.employee_id) )
      .subscribe(
        data => {
          this.employee = data;
        }
      );
  }

  updateEmployee(){
    this.employeeService.updateEmployee( Number(this.employee_id), this.employee)
      .subscribe(
        data => {
          this.employee = data as Employee ;
          this.success = true;
        },
        error => {
          console.log("Cannot update ! " + error);
        }
      );
  }

  onSubmit(){
    this.updateEmployee();
  }
}
