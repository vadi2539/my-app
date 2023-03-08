import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsignupComponent } from './websignup.component';

describe('WebsignupComponent', () => {
  let component: WebsignupComponent;
  let fixture: ComponentFixture<WebsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
