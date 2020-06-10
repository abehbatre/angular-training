import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AditsComponent } from './adits/adits.component';
import { BookrankComponent } from './bookrank/bookrank.component';


@NgModule({
   declarations: [
      AppComponent,
      AditsComponent,
      BookrankComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   exports: [BookrankComponent]
})
export class AppModule { }
