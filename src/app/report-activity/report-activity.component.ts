import { Component, OnInit } from '@angular/core';

import { DataService } from '../app.data.service';

export interface PeriodicElement {
  period: string;
  activityTime: string;
  burnedCalories: string;
  ranDistance: string;
}

export interface Summery {
  evaluation: string;
  comment: string;
}

@Component({
  selector: 'app-report-activity',
  templateUrl: './report-activity.component.html',
  styleUrls: ['./report-activity.component.css']
})
export class ReportActivityComponent implements OnInit {

  ELEMENT_DATA = [
    { 
      period: this.dataService.period, 
      activityTime: this.dataService.totalActivityTime, 
      burnedCalories: this.dataService.totalBurnedCalories, 
      ranDistance: this.dataService.totalRanDistance 
    }
  ];
  
  SUMMERY_DATA = [
    { 
      evaluation: 'bad', 
      comment: '先週（11/20~11/26）と比較して、合計活動時間は○○%増、合計消費カロリーは○○%減、合計走行距離は○○%減です。' 
    }
  ];

  displayedColumns = ['period', 'activityTime', 'burnedCalories', 'ranDistance'];
  dataSource = this.ELEMENT_DATA;

  summaryColumns = ['evaluation', 'comment'];
  summarySource = this.SUMMERY_DATA;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

}
