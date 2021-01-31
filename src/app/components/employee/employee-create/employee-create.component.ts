import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Employee from '../../model/employee.model';

import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false 

 constructor(private employeeService: EmployeeService, private router: Router) { }

 ngOnInit(): void {
 }
 
 createEmployee(): void {this.employeeService.create(this.employee).then(() => {
   console.log('Funcionario Criado!');
   this.submitted = true
   this.router.navigate(['/employee'])
   this.employeeService.showMessage('Funcionario Criado!')
 }) 
 }
 cancel(): void {
   this.router.navigate(['/employee'])
 }
}
