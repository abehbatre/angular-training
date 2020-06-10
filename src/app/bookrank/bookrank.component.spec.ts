import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookrankComponent } from './bookrank.component';

describe('BookrankComponent', () => {
  let component: BookrankComponent;
  let fixture: ComponentFixture<BookrankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookrankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
