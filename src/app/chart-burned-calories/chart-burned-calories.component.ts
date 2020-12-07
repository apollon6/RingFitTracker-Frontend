import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-burned-calories',
  templateUrl: './chart-burned-calories.component.html',
  styleUrls: ['./chart-burned-calories.component.css']
})
export class ChartBurnedCaloriesComponent implements OnInit {

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
      backgroundColor: 'rgba(254,120,120)',
      //backgroundColor: 'rgba(240,148,54)',
    },
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {data: [10, 20, 30, 40, 50, 60, 70], label: '消費カロリー（単位:kcal）' }
  ];
}
