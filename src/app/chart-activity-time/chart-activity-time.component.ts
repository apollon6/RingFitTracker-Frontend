import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { DataService } from '../app.data.service';

@Component({
  selector: 'app-chart-activity-time',
  templateUrl: './chart-activity-time.component.html',
  styleUrls: ['./chart-activity-time.component.css']
})
export class ChartActivityTimeComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [
    '11/27',
    '11/28',
    '11/29',
    '11/30',
    '12/1',
    '12/2',
    '12/3'
  ];
  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(226,207,0)',
    },
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {data: this.dataService.activityTime, label: '活動時間（単位:分）' }
  ];
}