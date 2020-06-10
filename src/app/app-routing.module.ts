import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AditsComponent } from './adits/adits.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  { path: 'list', component: ArticleComponent },
  { path: 'adit', component: AditsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
