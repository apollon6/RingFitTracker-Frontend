import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartActivityTimeComponent } from './chart-activity-time.component';

describe('ChartActivityTimeComponent', () => {
  let component: ChartActivityTimeComponent;
  let fixture: ComponentFixture<ChartActivityTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartActivityTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartActivityTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
