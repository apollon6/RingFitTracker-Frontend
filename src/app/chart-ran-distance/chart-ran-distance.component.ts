import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { DataService } from '../app.data.service';

@Component({
  selector: 'app-chart-ran-distance',
  templateUrl: './chart-ran-distance.component.html',
  styleUrls: ['./chart-ran-distance.component.css']
})
export class ChartRanDistanceComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.dataService.activityDate;
  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(45,202,143)',
    },
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {data: this.dataService.ranDistance, label: '走行距離（単位:km）' }
  ];
}
