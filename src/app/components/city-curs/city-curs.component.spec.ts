import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCursComponent } from './city-curs.component';

describe('CityCursComponent', () => {
  let component: CityCursComponent;
  let fixture: ComponentFixture<CityCursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
