import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookrankComponent } from './pages/bookrank/bookrank.component';
import { BrowseComponent } from './pages/browse/browse.component';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
   declarations: [
      AppComponent,
      BookrankComponent,
      BrowseComponent
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
