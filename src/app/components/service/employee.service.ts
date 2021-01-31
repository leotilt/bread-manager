import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import Employee from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeRef: AngularFireList<Employee>;

  private dbPath = '/employee';
  
  constructor(private db: AngularFireDatabase, private snackBar: MatSnackBar) {
    this.employeeRef = db.list(this.dbPath);
  }

  getEmployee(){
    return this.db.list('employee').snapshotChanges().pipe(
      map(changes =>{
        return changes.map(c => ({key: c.payload.key, ...c.payload.val() as {}}))
      })
    )
  }



  getAll(): AngularFireList<Employee> {
    return this.employeeRef;
  }

  create(employee: Employee): any {
    return this.employeeRef.push(employee);
  }

  update(key: string, value: any): Promise<void> {
    return this.employeeRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.employeeRef.remove(key);
  }


  // message 
  showMessage(msg: string,): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      
    });
  }
}