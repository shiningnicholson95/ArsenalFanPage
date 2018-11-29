import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendsviewComponent } from './legendsview.component';

describe('LegendsviewComponent', () => {
  let component: LegendsviewComponent;
  let fixture: ComponentFixture<LegendsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
