import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
