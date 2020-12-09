import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Activity {
  activityDate: string;
  activityTime: string;
  burnCalories: string;
  ranDistance: string;
}

interface Report {
  period: string;
  activityTime: string;
  burnCalories: string;
  ranDistance: string;
}

interface Activities {
  report: Report;
  activities: Activity[];
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) {}

  getActivities(){
    return this.http.get("http://localhost:4000/api/activities");
  }
}
