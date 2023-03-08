import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometableComponent } from './hometable.component';

describe('HometableComponent', () => {
  let component: HometableComponent;
  let fixture: ComponentFixture<HometableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
