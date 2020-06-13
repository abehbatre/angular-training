import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDialog } from 'src/app/shared/widgets/dialog/dialog.component';
import { Materi1Component } from 'src/app/modules/materi-1/materi1.component';
import { Materi2Component } from 'src/app/modules/materi-2/materi2.component';
import { EmployeeEditComponent } from 'src/app/modules/materi-2/employee-edit/employee-edit.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    Materi1Component,
    Materi2Component,
    EmployeeEditComponent,

    CustomDialog,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DefaultModule { }
