import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookrankComponent } from './pages/bookrank/bookrank.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeEditComponent } from './pages/employee/employee-edit/employee-edit.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


const routes: Routes = [

  // homepage
  { path: '', component: HomepageComponent },

  // book rank app
  { path: 'book-rank', component: BookrankComponent },
  
  // employee app
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/edit/:id', component: EmployeeEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
