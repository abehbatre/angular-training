import { Component, OnInit, Inject } from '@angular/core';
import { Article } from './materi1.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialog } from 'src/app/shared/widgets/dialog/dialog.component';



@Component({
  selector: 'app-materi1',
  templateUrl: './materi1.component.html',
  styleUrls: ['./materi1.component.css']
})
export class Materi1Component implements OnInit {

  articles: Article[];
  fg: FormGroup;
  get fc() { return this.fg.controls; } // helper formControl
  patternURL = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    // validation 
    this.fg = this.fb.group({
      'bookName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'bookURL': new FormControl('', [Validators.required, Validators.pattern(this.patternURL),]),
    })
  }

  ngOnInit() { }


  DUMMY_DATA: Article[] = [
    { title: 'Angular 2', link: 'http://angular.io', votes: 3 },
    { title: 'Fullstack', link: 'http://fullstack.io', votes: 2 },
    { title: 'Adit Web', link: 'https://adit.web.id', votes: 1 },
  ];



  voteUp(article: Article): void { article.votes += 1 }
  voteDown(article: Article): void { article.votes -= 1 }
  
  sortedArticles(): Article[] {
    return this.DUMMY_DATA.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  getDomain(article: Article): string {
    try {
      const domainAndPath: string = article.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }

  onSubmit() {
    if (this.fg.invalid) return; // check validation first ...

    let values = this.fg.value;
    let _bookName = values.bookName;
    let _bookURL: string = values.bookURL;

    // prefix url 
    if (!_bookURL.includes('http')) {
      _bookURL = 'https://' + _bookURL;
    }

    const temp = { title: _bookName, link: _bookURL, votes: 0 }
    this.DUMMY_DATA.push(temp)

    this.showDialog('Berhasil', 'buku ' + _bookName + ' telah ditambahkan');
    this.fg.reset();
  }

  showDialog(title: string, msg: string) {
    this.dialog.open(CustomDialog, {
      data: { title: title, msg: msg, }
    });
  }
}

