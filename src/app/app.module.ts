import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookrankComponent } from './pages/bookrank/bookrank.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { BrowseEditComponent } from './pages/browse/browse-edit/browse-edit.component';

import { HttpClientModule } from "@angular/common/http";
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
   declarations: [
      AppComponent,
      BookrankComponent,
      BrowseComponent,
      BrowseEditComponent,
      HomepageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   exports: [
      BookrankComponent
   ]
})
export class AppModule { }
