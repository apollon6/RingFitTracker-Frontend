import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

interface UpdateActivityBody {
  activityTime: string;
  burnedCalories: string;
  ranDistance: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getActivities() {
    // return this.http.get('https://rfa.apollon6.com/api/activities');
    return this.http.get('http://localhost:4000/api/activities');
  }

  getActivity(activityDate: string) {
    return this.http.get('http://localhost:4000/api/activities/' + activityDate);
  }

  updateActivity(activityDate: string, body: UpdateActivityBody) {
    return this.http.put('http://localhost:4000/api/activities/' + activityDate, body, this.httpOptions);
  }
}
