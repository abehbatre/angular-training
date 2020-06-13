import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // qoute purpose
  rQ = [
    "kamu hanya mengenalku sebatas $ (guest), jika kamu mengenalku seluas # (root) , kamu pasti menyukaiku .",
    "seandainya sifat ku seperti 'variabel' bukan konstanta .",
    "aku bagimu seperti internet explorer dipake cuma untuk download browser lain . agar kamu bisa lebih nyaman, kurang baik apa coba! aku tau aku lelet, tidak staylist, sering dibulli sama browser lain dan tidak kaya akan fitur.",
    "if (mood < 40) callMom(); "
  ]
  aQoute: string = this.rQ[Math.floor(Math.random() * this.rQ.length)];
  loadQoute(): void {
    console.log('getting new qoute : ' + this.aQoute);
    this.aQoute = this.rQ[Math.floor(Math.random() * this.rQ.length)]; // re random
  }
  
}
