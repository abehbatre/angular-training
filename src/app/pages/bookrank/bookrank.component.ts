import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Article } from "./bookrank.model";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


var ehttp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;



@Component({
  selector: 'app-bookrank',
  templateUrl: './bookrank.component.html',
  styleUrls: ['./bookrank.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookrankComponent implements OnInit {

  articles: Article[];
  fg: FormGroup;
  get f() { return this.fg.controls; }

  constructor(
    private fb: FormBuilder,
  ) {

    // create dummy article 
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 4),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Adit Web', 'https://adit.web.id', 1)
    ];

    // validation 
    this.fg = this.fb.group({
      'bookName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'bookURL': new FormControl('', [Validators.required, Validators.pattern(ehttp),]),
    })
  }


  ngOnInit(): void { }


  onSubmit() {
    if (this.fg.invalid) return; // check form group first ...

    console.log('@proses : ' + this.fg.value.bookName);
    let values = this.fg.value;
    let _bookName = values.bookName;
    let _bookURL: string = values.bookURL;


    // prefix url 
    if (!_bookURL.includes('http')) {
      _bookURL = 'https://' + _bookURL;
    }

    this.articles.push(new Article(_bookName, _bookURL, 0));
    alert('buku ' + _bookName + ' telah ditambahkan')
    this.fg.reset();
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}