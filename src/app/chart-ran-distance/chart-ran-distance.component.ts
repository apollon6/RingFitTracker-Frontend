import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-ran-distance',
  templateUrl: './chart-ran-distance.component.html',
  styleUrls: ['./chart-ran-distance.component.css']
})
export class ChartRanDistanceComponent implements OnInit {

  constructor() {}

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
      backgroundColor: 'rgba(45,202,143)',
      // backgroundColor: 'rgba(240,148,54)',
    },
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {data: [1, 2, 3, 4, 5, 6, 7], label: '走行距離（単位:km）' }
  ];
}
