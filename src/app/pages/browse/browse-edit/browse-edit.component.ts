import { Component, OnInit, Input } from '@angular/core';
import { Browse } from '../browse.model';
import { ActivatedRoute } from '@angular/router';
import { BrowseService } from '../browse.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-browse-edit',
  templateUrl: './browse-edit.component.html',
  styleUrls: ['./browse-edit.component.css']
})
export class BrowseEditComponent implements OnInit {

  @Input() browse: Browse;

  suksesFlag: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: BrowseService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getBrowse(id)
      .subscribe(res => this.browse = res);
  }

  update(): void {
    this.service.updateBrowse(this.browse)
      .subscribe(() => {
        console.log("updated ..");
        this.suksesFlag = true;
        // alert('sukses update ...');
        // window.history.back();
      });
  }
}