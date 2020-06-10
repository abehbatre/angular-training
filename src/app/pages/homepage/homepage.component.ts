import { Component, OnInit } from '@angular/core';


var rQ = [
  "kamu hanya mengenalku sebatas $ (guest), jika kamu mengenalku seluas # (root) , kamu pasti menyukaiku .",
  "seandainya sifat ku seperti 'variabel' bukan konstanta .",
  "aku bagimu seperti internet explorer dipake cuma untuk download browser lain . agar kamu bisa lebih nyaman, kurang baik apa coba! aku tau aku lelet, tidak staylist, sering dibulli sama browser lain dan tidak kaya akan fitur.",
  "jalan-jalan ke kota jepang jangan lupa beli kerupuk buat apa ke kota jepang kalo cuma buat beli kerupuk ~  "
]


// const randomQoute = rQ[Math.floor(Math.random() * rQ.length)];


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  

  aQoute: string = rQ[Math.floor(Math.random() * rQ.length)]; 
  constructor() { }
  ngOnInit() { }


  loadQoute() : void {
    console.log('getting new qoute : ' + this.aQoute);
    this.aQoute = rQ[Math.floor(Math.random() * rQ.length)]; // re random
  }
  
}
