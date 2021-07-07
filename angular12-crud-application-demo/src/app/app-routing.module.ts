import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEmployeeComponent } from './employee/components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/components/update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'createEmployee', component: CreateEmployeeComponent },
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent },
  { path: 'employeeDetails/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
