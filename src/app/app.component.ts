import { Component } from '@angular/core';
import { HomePageService } from './pages/homepage/homepage.service';


var today = new Date()
var cTime = today.getHours()


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private ip: HomePageService) { }

  ngOnInit() { this.getIp(); }


  // ----------------------------------------------------------
  // var
  // ----------------------------------------------------------
  title = 'Adit Training';
  ipAddress: string;

  // menus
  mBookRank: boolean = false;
  mBrowseApp: boolean = false;


  // ----------------------------------------------------------
  // func
  // ----------------------------------------------------------
  getIp() {
    this.ip.getIpAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    })
  }

  checkTime(): string {
    console.log('now  : ' + cTime);
    if (cTime >= 0 && cTime <= 10) return 'Pagi'
    else if (cTime >= 11 && cTime <= 14) return 'Siang'
    else if (cTime >= 15 && cTime <= 18) return 'Sore'
    else if (cTime >= 19 && cTime <= 23) return 'Malam'
  }

}
