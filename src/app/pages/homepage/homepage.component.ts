import { Component, OnInit } from '@angular/core';




var today = new Date()
var cTime = today.getHours()

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  

  constructor() { }
  ngOnInit() { }


 

  checkTime(): string {
    if (cTime >= 0 && cTime <= 10) return 'Pagi'
    else if (cTime >= 11 && cTime <= 14) return 'Siang'
    else if (cTime >= 15 && cTime <= 18) return 'Sore'
    else if (cTime >= 19 && cTime <= 23) return 'Malam'
  }
}
