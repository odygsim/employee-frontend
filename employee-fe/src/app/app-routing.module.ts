import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";

const routes: Routes = [
  { path:'', redirectTo : 'employees', pathMatch : 'full'},
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: EmployeeCreateComponent },
  { path: 'edit/:id', component: EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
