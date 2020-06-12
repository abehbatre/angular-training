import { Component } from '@angular/core';
import { HomePageService } from './pages/homepage/homepage.service';


var rQ = [
  "kamu hanya mengenalku sebatas $ (guest), jika kamu mengenalku seluas # (root) , kamu pasti menyukaiku .",
  "seandainya sifat ku seperti 'variabel' bukan konstanta .",
  "aku bagimu seperti internet explorer dipake cuma untuk download browser lain . agar kamu bisa lebih nyaman, kurang baik apa coba! aku tau aku lelet, tidak staylist, sering dibulli sama browser lain dan tidak kaya akan fitur.",
  "jalan-jalan ke kota jepang jangan lupa beli kerupuk buat apa ke kota jepang kalo cuma buat beli kerupuk ~  "
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private ip: HomePageService) { }
  ngOnInit() { }

  // var
  mBookRank: boolean = false;
  mEmployee: boolean = false;
  title = 'Adit Training';
  aQoute: string = rQ[Math.floor(Math.random() * rQ.length)];

  // func
  loadQoute(): void {
    console.log('getting new qoute : ' + this.aQoute);
    this.aQoute = rQ[Math.floor(Math.random() * rQ.length)]; // re random
  }

}
