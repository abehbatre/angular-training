import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe = new EventEmitter<any>();
  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "adit",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/angular.svg")
    );
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
}
