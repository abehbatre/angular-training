import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AditsComponent } from './adits/adits.component';
import { BookrankComponent } from './bookrank/bookrank.component';


const routes: Routes = [
  { path: 'book-rank', component: BookrankComponent },
  { path: 'browse-app', component: AditsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
