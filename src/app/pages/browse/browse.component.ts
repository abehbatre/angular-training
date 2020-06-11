import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

import { Browse } from "./browse.model";
import { BrowseService } from "./browse.service";
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

import { MustMatch } from "../../helper/must-match.validator";


function phoneNumberValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^(\+62)/)) {
    return { invalidPhone: true };
  }
}




@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {

  constructor(
    private browseService: BrowseService,
    private fb: FormBuilder
  ) { }


  mBrowse: Browse[];    // api purppose  
  fg: FormGroup;        // validation purpose


  ngOnInit() {
    // load data on init ~
    this.getBrowseList();

    // validator on init ~
    this.fg = this.fb.group({
      'emailAddress': new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'password': new FormControl('', [Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{6,})/)])]),
      'repassword': new FormControl('', [Validators.required]),
    }, { validator: MustMatch('password', 'repassword') });
  }

  // varibale to get value of form
  get f() { return this.fg.controls; }



  getBrowseList(): void {
    this.browseService.getBrowses()
      .subscribe(browses => this.mBrowse = browses);
  }

  delete(browse: Browse): void {
    this.mBrowse = this.mBrowse.filter(b => b !== browse);
    this.browseService.deleteBrowse(browse).subscribe();
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
      this.browseService.addBrowse({
        emailAddress,
        firstName,
        lastName,
        password,
        repassword,
        address,
        phoneNumber
      } as unknown as Browse).subscribe(browse => {
        this.mBrowse.push(browse);
        alert('SUCCESS!! :-)\n\n' + this.fg.value.firstName)

        // reset form...
        this.fg.reset();
      });
    }
  }

}
