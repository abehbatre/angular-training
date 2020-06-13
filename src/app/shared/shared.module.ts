import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './components/material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MaterialModule,
    
  ]
})
export class SharedModule { }
