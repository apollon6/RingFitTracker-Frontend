import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';
import { map } from 'rxjs/operators';

import { ActivitiesService } from '../service/activities.service';
import { DataService } from '../app.data.service';

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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private dataService: DataService, 
    private datePipe: DatePipe,
    private overlay: Overlay,
    private activitiesService: ActivitiesService
  ) {}
  
  overlayRef = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically()
  });

  ngOnInit(): void {
    this.overlayRef.attach(new ComponentPortal(MatSpinner));

    let targetDates = [];
    let targetDate = new Date();
    let referenceDate = new Date();
    for (let i = 1; i <= 7; i++) {
      targetDate.setDate(referenceDate.getDate() - Number(i));
      targetDates.unshift(this.datePipe.transform(targetDate, "yyyy-MM-dd").toString());
    }
    this.dataService.activityDate = targetDates;

    let activityTime = [];
    let burnedCalories = [];
    let ranDistance = [];
    let response = this.activitiesService.getActivities();
    response.subscribe(res => {
      const activities = res as Activities;
      let count = 0;
      for (let activity of activities["activities"]) {
        if (activity["activityDate"] === targetDates[count]) {
          activityTime.push(activity["activityTime"]);
          burnedCalories.push(activity["burnedCalories"]);
          ranDistance.push(activity["ranDistance"]);
        }
        count++;
      }
    });
    
    this.dataService.activityTime = activityTime;
    this.dataService.burnedCalories = burnedCalories;
    this.dataService.ranDistance = ranDistance;
    this.overlayRef.detach();
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        { title: '活動レポート', cols: 1, rows: 2 },
        { title: '活動時間', cols: 1, rows: 2 },
        { title: '消費カロリー', cols: 1, rows: 2 },
        { title: '走行距離', cols: 1, rows: 2 }
      ];
    })
  );
}
