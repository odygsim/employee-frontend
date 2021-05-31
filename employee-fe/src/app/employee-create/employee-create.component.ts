import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Employee } from "../models/employee";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee = new Employee();
  success : boolean = false;
  trip_types = ['One way', 'Round trip', 'Multiple destinations']

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveEmployee();
  }

  saveEmployee(){

    console.log(this.employee);

    this.employeeService.createEmployee(this.employee)
      .subscribe(
        data => {
          this.success = true;
          console.log('New employee added!!!');
        },
          (error: string) => console.log('Sorry, cannot save! ' + error)
      )

  }

}
