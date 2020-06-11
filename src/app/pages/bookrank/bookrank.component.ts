import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Article } from "./bookrank.model";

@Component({
  selector: 'app-bookrank',
  templateUrl: './bookrank.component.html',
  styleUrls: ['./bookrank.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookrankComponent implements OnInit {

  constructor() {
    this.articles = [
      new Article('Angular 2', null, 'http://angular.io', 4),
      new Article('Fullstack', 'content', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'content', 'http://angular.io', 1)
    ];
  }

  ngOnInit(): void { }

  articles: Article[];

  addArticle(title: HTMLInputElement, content: HTMLInputElement, link: HTMLInputElement): boolean {
    
    // validasi ~
    if (!link.value.includes('http')) {
      alert('link not valid');
    } else if (title.value.length == 0) {
      alert('bookname cannot be empty ')
    } else {
      this.articles.push(new Article(title.value, content.value, link.value, 0));
      alert('buku ' + title.value + ' telah ditambahkan')

      // reset
      title.value = '';
      content.value = '';
      link.value = '';
    }
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
