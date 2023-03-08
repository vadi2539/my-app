import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformregisterComponent } from './webformregister.component';

describe('WebformregisterComponent', () => {
  let component: WebformregisterComponent;
  let fixture: ComponentFixture<WebformregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
