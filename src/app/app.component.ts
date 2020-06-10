import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  title = 'test2';
  author = 'Adit';

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', '3'),
      new Article('Fullstack', 'content', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'content', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, content: HTMLInputElement, link: HTMLInputElement): boolean {
    if (title.value.length > 0) {
      this.articles.push(new Article(title.value, content.value, link.value, 0));
      alert('buku ' + title.value  + ' telah ditambahkan')
      
      // reset
      title.value = '';
      content.value = '';
      link.value = '';
    } else {
      alert('bookname cannot be empty ')
    }
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
