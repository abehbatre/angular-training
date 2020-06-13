import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../materi2.service';
import { MatDialog } from '@angular/material/dialog';
import { MustMatch } from 'src/app/shared/helper/must-match.validator';
import { EmployeeEntity } from '../materi2.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';




function phoneNumberValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^(\+62)/)) {
    return { invalidPhone: true };
  }
}


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employees: any = [];
  fg: FormGroup;
  hide = true;

  get fc() { return this.fg.controls; }
  suksesFlag: boolean = false;


  constructor(
    private apiService: EmployeeService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location,
  ) {

    // validator on init ~
    this.fg = this.fb.group({
      'emailAddress': new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'password': new FormControl('', [Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{6,})/)])]),
      'repassword': new FormControl('', [Validators.required]),
      'address': new FormControl('', []),
      'phoneNumber': new FormControl('', []),
    }, { validator: MustMatch('password', 'repassword') });

  }


  ngOnInit() {
    this.employees = [];
    this.getEmployee();



  }

  getEmployee() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getEmployee(id)
      .subscribe(res => this.employees = res);
  }

  onSubmit(): void {
    if (this.fg.invalid) return;
    this.apiService.updateEmployee(this.employees)
      .subscribe(() => {
        console.log("id : " + this.employees.id + "updated");
        console.log("name : " + this.employees.firstName + "updated");
        this.suksesFlag = true;
        this.location.back();
      });
  }
 
} 
