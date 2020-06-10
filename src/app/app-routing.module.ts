import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookrankComponent } from './pages/bookrank/bookrank.component';
import { BrowseComponent } from './pages/browse/browse.component';


const routes: Routes = [
  { path: 'book-rank', component: BookrankComponent },
  { path: 'browse-app', component: BrowseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
