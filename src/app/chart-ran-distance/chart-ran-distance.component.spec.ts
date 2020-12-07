import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRanDistanceComponent } from './chart-ran-distance.component';

describe('ChartRanDistanceComponent', () => {
  let component: ChartRanDistanceComponent;
  let fixture: ComponentFixture<ChartRanDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartRanDistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRanDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
