import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
//material
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { HttpClientModule } from  '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeReadComponent } from './components/employee/employee-read/employee-read.component';
import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    EmployeeCreateComponent,
    EmployeeReadComponent,
    EmployeeCrudComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
