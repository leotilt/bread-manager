import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeReadComponent } from './components/employee/employee-read/employee-read.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud/product-crud.component';



const routes: Routes = [
 {
  path: "",
  component: HomeComponent
 },
  {
   path: "products",
   component: ProductCrudComponent
  },
  {
    path:"products/create",
    component: ProductCreateComponent
  },
  {
    path:"products/update/:key",
    component: ProductUpdateComponent
  },
  {
   path:"employee",
   component:EmployeeCrudComponent
  },
  {
   path:"employee/create",
   component:EmployeeCreateComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
