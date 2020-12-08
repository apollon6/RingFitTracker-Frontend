import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-manage-activity',
  templateUrl: './manage-activity.component.html',
  styleUrls: ['./manage-activity.component.css']
})
export class ManageActivityComponent implements OnInit {

  private activityDate: string;
  private activityTime: string;
  private burnedCalories: string;
  private ranDistance: string;

  private disableField: boolean = true;
  private disableSearchButton: boolean = true;
  private disableUpdateButton: boolean = true;
  
  constructor(private breakpointObserver: BreakpointObserver, public datePipe: DatePipe) {}

  ngOnInit(): void {
  }

  changeActivityDate(event: any) {
    let date = this.datePipe.transform(this.activityDate, "yyyy-MM-dd").toString();
    this.disableSearchButton = false;
  }

  changeField(eevent: any) {
    if (this.activityTime  && this.burnedCalories && this.ranDistance) {
      this.disableUpdateButton = false;
    }
  }

  search() {
    this.disableField = false;
  }

  update() {
    
  }



  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        { title: '1. 活動記録/検索', cols: 2, rows: 1 },
        { title: '2. 活動記録/更新', cols: 2, rows: 1 },
      ];
    })
  );

}
