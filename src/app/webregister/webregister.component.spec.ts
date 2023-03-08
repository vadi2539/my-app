import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebregisterComponent } from './webregister.component';

describe('WebregisterComponent', () => {
  let component: WebregisterComponent;
  let fixture: ComponentFixture<WebregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
