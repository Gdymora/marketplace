import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCursComponent } from './form-add-curs.component';

describe('FormAddCursComponent', () => {
  let component: FormAddCursComponent;
  let fixture: ComponentFixture<FormAddCursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddCursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddCursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
