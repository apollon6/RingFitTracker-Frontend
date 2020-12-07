import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // public exampleFlag: boolean = false;
  public activityTime: number[];
  public burnedCalories: number[];
  public ranDistance: number[];
  public activityDate: string[];
}