import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookrankComponent } from './pages/bookrank/bookrank.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { BrowseEditComponent } from './pages/browse/browse-edit/browse-edit.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


const routes: Routes = [

  // homepage
  { path: '', component: HomepageComponent },

  // book rank app
  { path: 'book-rank', component: BookrankComponent },
  
  // browse app
  { path: 'browse-app', component: BrowseComponent },
  { path: 'browse-app/edit/:id', component: BrowseEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
