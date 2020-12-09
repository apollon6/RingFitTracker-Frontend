import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public period: string;
  public totalActivityTime: string;
  public totalBurnedCalories: string;
  public totalRanDistance: string;

  public activityTime: number[];
  public burnedCalories: number[];
  public ranDistance: number[];
  public activityDate: string[];
}