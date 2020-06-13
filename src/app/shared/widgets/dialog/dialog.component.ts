
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({ templateUrl: './dialog.component.html' })
export class CustomDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  t = this.data.title
  m = this.data.msg
}

export interface DialogData {
  title: string,
  msg: string
}