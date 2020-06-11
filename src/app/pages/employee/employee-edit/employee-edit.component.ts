import { Component, OnInit, Input } from '@angular/core';
import { EmployeeEntity } from '../employee.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  @Input() mEmployee: EmployeeEntity;

  suksesFlag: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: EmployeeService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getEmployee(id)
      .subscribe(res => this.mEmployee = res);
  }

  update(): void {
    this.service.updateEmployee(this.mEmployee)
      .subscribe(() => {
        console.log("updated ..");
        this.suksesFlag = true;
        // alert('sukses update ...');
        // window.history.back();
      });
  }
}