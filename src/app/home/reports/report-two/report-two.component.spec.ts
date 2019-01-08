import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTwoComponent } from './report-two.component';

describe('ReportTwoComponent', () => {
  let component: ReportTwoComponent;
  let fixture: ComponentFixture<ReportTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
