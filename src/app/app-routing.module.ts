import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layout/default/default.component';
import { Materi1Component } from './modules/materi-1/materi1.component';
import { Materi2Component } from './modules/materi-2/materi2.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'materi-1',
    component: Materi1Component
  },
  {
    path: 'materi-2',
    component: Materi2Component
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
