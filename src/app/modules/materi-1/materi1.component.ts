import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialog } from 'src/app/shared/widgets/dialog/dialog.component';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-materi1',
  templateUrl: './materi1.component.html',
  styleUrls: ['./materi1.component.css']
})
export class Materi1Component implements OnInit {

  books: any = [];
  fg: FormGroup;
  get fc() { return this.fg.controls; } // helper formControl
  patternURL = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.getBooks();

    this.fg = this.fb.group({
      'bookName': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'author': new FormControl('', [Validators.required, Validators.minLength(4),]),
      'bookURL': new FormControl('', [Validators.required, Validators.pattern(this.patternURL),]),
    });
  }


  // GET BOOKS LIST 
  getBooks() {
    this.apiService.getBooks().subscribe((data: {}) => {
      console.log(data);
      this.books = data;
    });
  }

  // FUNCTION FOR BOOKS
  voteUp(b): void { b.votes += 1 }
  voteDown(b): void { b.votes -= 1 }
  sorterBooks(): any[] {
    return this.books.sort((a, b) => b.votes - a.votes);
  }

  // ADD NEW BOOK
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
    this.books.push(temp)

    this.showDialog('Berhasil', 'buku ' + _bookName + ' telah ditambahkan');
    this.fg.reset();
  }

  private showDialog(title: string, msg: string) {
    this.dialog.open(CustomDialog, {
      data: { title: title, msg: msg, }
    });
  }
}

