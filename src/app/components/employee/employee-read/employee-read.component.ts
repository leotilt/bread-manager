import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Employee from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';


@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements OnInit {
   
  
  employee?: Observable<Employee[]> ;
  title = 'Produtos'
 displayedColumns= ['name', 'workTime', 'banch2', 'action'];
 dataSource: any;
 
 
 
 constructor(private employeeService: EmployeeService, private router: Router) {
  {
    this.dataSource = this.employeeService.getAll().snapshotChanges()
      .pipe(map(items => {
        return items.map(item => {
          return Object.assign({ key: item.payload.key }, item.payload.val())
        });
      }));
  }
 }

  ngOnInit(): void {
 
 }


 deleteEmployee(){
  let conf = confirm('not work :(');

  if(conf){
    console.log("hi")
  }
}
editEmployee(){
  let conf = confirm('not work :(');

  if(conf){
    console.log("hi")
  }
}


}