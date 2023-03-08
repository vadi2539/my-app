import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterformPopupComponent } from './registerform-popup.component';

describe('RegisterformPopupComponent', () => {
  let component: RegisterformPopupComponent;
  let fixture: ComponentFixture<RegisterformPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterformPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterformPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
