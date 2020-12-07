import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { DataService } from '../app.data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.activityTime = [50, 20, 30, 40, 50, 60, 70];
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
