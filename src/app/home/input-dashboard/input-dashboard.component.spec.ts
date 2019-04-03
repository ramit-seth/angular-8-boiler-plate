import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDashboardComponent } from './input-dashboard.component';

describe('InputDashboardComponent', () => {
  let component: InputDashboardComponent;
  let fixture: ComponentFixture<InputDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
