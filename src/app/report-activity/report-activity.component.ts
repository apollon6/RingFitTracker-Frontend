import { Component, OnInit } from '@angular/core';

import { DataService } from '../app.data.service';

export interface PeriodicElement {
  activityTime: string;
  burnedCalories: string;
  ranDistance: string;
}

export interface Summery {
  period: string;
  evaluation: string;
}

@Component({
  selector: 'app-report-activity',
  templateUrl: './report-activity.component.html',
  styleUrls: ['./report-activity.component.css']
})
export class ReportActivityComponent implements OnInit {

  ELEMENT_DATA = [
    { 
      evaluation: this.dataService.evaluation,
      activityTime: this.dataService.totalActivityTime, 
      burnedCalories: this.dataService.totalBurnedCalories, 
      ranDistance: this.dataService.totalRanDistance 
    }
  ];
  
  SUMMERY_DATA = [
    { 
      period: this.dataService.period, 
    }
  ];

  displayedColumns = ['evaluation', 'activityTime', 'burnedCalories', 'ranDistance'];
  dataSource = this.ELEMENT_DATA;

  summaryColumns = ['period'];
  summarySource = this.SUMMERY_DATA;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

}
