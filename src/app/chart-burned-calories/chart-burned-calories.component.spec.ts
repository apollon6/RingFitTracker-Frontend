import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBurnedCaloriesComponent } from './chart-burned-calories.component';

describe('ChartBurnedCaloriesComponent', () => {
  let component: ChartBurnedCaloriesComponent;
  let fixture: ComponentFixture<ChartBurnedCaloriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBurnedCaloriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBurnedCaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
