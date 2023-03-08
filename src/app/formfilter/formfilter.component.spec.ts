import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfilterComponent } from './formfilter.component';

describe('FormfilterComponent', () => {
  let component: FormfilterComponent;
  let fixture: ComponentFixture<FormfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
