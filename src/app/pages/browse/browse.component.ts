import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Form } from './form.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';



function phoneNumberValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^(\+62)/)) {
    return { invalidPhone: true };
  }
}

function checkPassword(group: FormGroup): { [s: string]: boolean } {
  return group.get('password').value === group.get('repeatPassword').value
    ? null : { 'mismatch': true };
}







@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  index: number;
  inputEdit: any;
  userInput: Form[] = [];

  @Input() inputForm: Form[];
  @Output() onEditFormSelected: EventEmitter<Form>;

  constructor() {
    this.userInput = [
      new Form(1, 'a@email.com', 'a', 'a', 'aaa90&', 'aaa90&', 'a', '+62'),
      new Form(2, 'b@email.com', 'b', 'b', 'bbb88%', 'bbb88%', 'b', '+62')
    ]
  }

  ngOnInit() { }

}
