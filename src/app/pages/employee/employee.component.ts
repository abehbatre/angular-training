import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

import { EmployeeEntity } from "./employee.model";
import { EmployeeService } from "./employee.service";
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

import { MustMatch } from "../../helper/must-match.validator";
import { Router } from '@angular/router';


function phoneNumberValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^(\+62)/)) {
    return { invalidPhone: true };
  }
}




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor(
    private service: EmployeeService,
    private fb: FormBuilder,
  ) { }


  mEmployee: EmployeeEntity[];    // api purppose  
  fg: FormGroup;                // validation purpose


  ngOnInit() {
    // load data on init ~
    this.getEmployeeList();

    // validator on init ~
    this.fg = this.fb.group({
      'emailAddress': new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'password': new FormControl('', [Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{6,})/)])]),
      'repassword': new FormControl('', [Validators.required]),
      'address': new FormControl('',),
      'phoneNumber': new FormControl('', [Validators.compose([Validators.required, phoneNumberValidator])]),
    }, { validator: MustMatch('password', 'repassword') });
  }

  // varibale to get value of form
  get f() { return this.fg.controls; }



  getEmployeeList(): void {
    this.service.getEmployees()
      .subscribe(employees => this.mEmployee = employees);
  }

  delete(employee: EmployeeEntity): void {
    this.mEmployee = this.mEmployee.filter(b => b !== employee);
    this.service.deleteEmployee(employee).subscribe();
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.fg.invalid) return;
    else {
      console.log('@proses : ' + this.fg.value.firstName);
      let values = this.fg.value;
      let emailAddress = values.emailAddress;
      let firstName = values.firstName;
      let lastName = values.lastName;
      let password = values.password;
      let repassword = values.repassword;
      let address = values.address;
      let phoneNumber = values.phoneNumber;
      this.service.addEmployee({
        emailAddress,
        firstName,
        lastName,
        password,
        repassword,
        address,
        phoneNumber
      } as unknown as EmployeeEntity).subscribe(employee => {
        this.mEmployee.push(employee);
        alert('SUCCESS!! :-)\n\n' + this.fg.value.address)

        // reset form...
        this.fg.reset();
      });
    }
  }
}
