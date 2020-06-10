import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditsComponent } from './adits.component';

describe('AditsComponent', () => {
  let component: AditsComponent;
  let fixture: ComponentFixture<AditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
