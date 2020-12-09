import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { DataService } from '../app.data.service';

@Component({
  selector: 'app-chart-burned-calories',
  templateUrl: './chart-burned-calories.component.html',
  styleUrls: ['./chart-burned-calories.component.css']
})
export class ChartBurnedCaloriesComponent implements OnInit {

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
      backgroundColor: 'rgba(254,120,120)',
    },
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {data: this.dataService.burnedCalories, label: '消費カロリー（単位:kcal）' }
  ];
}
