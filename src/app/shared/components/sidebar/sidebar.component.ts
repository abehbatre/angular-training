import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  avatar = "https://png.pngtree.com/png-clipart/20190906/original/pngtree-couple-avatar-boy-avatar-cartoon-cute-png-image_4566617.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
