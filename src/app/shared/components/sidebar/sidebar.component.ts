import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  profile: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.apiService.getProfile().subscribe((data: {}) => {
      console.log(data);
      this.profile = data;
    });
  }
}
