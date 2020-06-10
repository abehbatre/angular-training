import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookrankComponent } from './pages/bookrank/bookrank.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { BrowseInputComponent } from './pages/browse/browse-input/browse-input.component';


const routes: Routes = [
  { path: 'book-rank', component: BookrankComponent },
  { path: 'browse-app', component: BrowseComponent },
  { path: 'browse-input', component: BrowseInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
