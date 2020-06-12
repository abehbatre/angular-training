
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookrankComponent } from './pages/bookrank/bookrank.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeEditComponent } from './pages/employee/employee-edit/employee-edit.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeMockService } from './pages/employee/employee.mock.service';



@NgModule({
   declarations: [
      AppComponent,
      BookrankComponent,
      EmployeeComponent,
      EmployeeEditComponent,
      HomepageComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,

      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
         EmployeeMockService, { dataEncapsulation: false }
      )
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
   // ,
   // exports: [
   //    BookrankComponent
   // ]
})
export class AppModule { }
