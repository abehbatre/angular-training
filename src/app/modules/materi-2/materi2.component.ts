import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './materi2.service';
import { EmployeeEntity } from './materi2.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/helper/must-match.validator';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialog } from 'src/app/shared/widgets/dialog/dialog.component';




function phoneNumberValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^(\+62)/)) {
    return { invalidPhone: true };
  }
}
@Component({
  selector: 'app-materi2',
  templateUrl: './materi2.component.html',
  styleUrls: ['./materi2.component.css']
})
export class Materi2Component implements OnInit {

  employees: any = [];
  fg: FormGroup;
  hide = true;

  constructor(
    private apiService: EmployeeService,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }


  get fc() { return this.fg.controls; }

  ngOnInit() {
    this.employees = [];
    this.getEmployees();

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

  getEmployees() {
    this.apiService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  deleteEmployee(employee: EmployeeEntity): void {
    this.employees = this.employees.filter(b => b !== employee);
    this.apiService.deleteEmployee(employee).subscribe();
  }


  onSubmit() {
    // stop here if form is invalid
    if (this.fg.invalid) {
      return;
    }
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
      this.apiService.addEmployee({
        emailAddress,
        firstName,
        lastName,
        password,
        repassword,
        address,
        phoneNumber
      } as unknown as EmployeeEntity).subscribe(employee => {
        this.employees.push(employee);
        this.showDialog('Berhasil', 'karyawan ' + firstName + ' '+ lastName + ' telah ditambahkan');
        // reset form...
        this.fg.reset();
        this.ngOnInit(); 
      });
    }
  }

  showDialog(title: string, msg: string) {
    this.dialog.open(CustomDialog, {
      data: { title: title, msg: msg, }
    });
  }
  
}
