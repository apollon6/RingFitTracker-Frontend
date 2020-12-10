import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

import { ActivitiesService } from '../service/activities.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

interface Activity {
  activityDate: string;
  activityTime: string;
  burnCalories: string;
  ranDistance: string;
}

interface UpdateActivityBody {
  activityTime: string;
  burnedCalories: string;
  ranDistance: string;
}

export interface data {
  title: string;
  message: string;
}

@Component({
  selector: 'app-manage-activity',
  templateUrl: './manage-activity.component.html',
  styleUrls: ['./manage-activity.component.css']
})
export class ManageActivityComponent implements OnInit {

  activityDate: string;
  activityTime: string;
  burnedCalories: string;
  ranDistance: string;

  disableField: boolean = true;
  disableSearchButton: boolean = true;
  disableUpdateButton: boolean = true;
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private datePipe: DatePipe,
    private overlay: Overlay,
    private dialog: MatDialog,
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
  }

  changeActivityDate(event: any) {
    this.disableSearchButton = false;
  }

  changeField(event: any) {
    if (this.activityTime  && this.burnedCalories && this.ranDistance) {
      this.disableUpdateButton = false;
    } else {
      this.disableUpdateButton = true;
    }
  }

  search() {
    this.overlayRef.attach(new ComponentPortal(MatSpinner));

    let activityDate = this.datePipe.transform(this.activityDate, "yyyy-MM-dd").toString();
    let response = this.activitiesService.getActivity(activityDate);
    response.subscribe(
      res => {
        let activity = res as Activity;
        this.disableField = false;
        this.activityTime = activity["activityTime"];
        this.burnedCalories = activity["burnedCalories"];
        this.ranDistance = activity["ranDistance"];
        this.disableUpdateButton = false;

        this.overlayRef.detach();
      },
      err => {
        this.overlayRef.detach();
        if (err.status === 404) {
          this.activityTime = "";
          this.burnedCalories = "";
          this.ranDistance = "";
          this.disableField = true;
          this.disableUpdateButton = true;
          this.dialog.open(AlertDialogComponent, {
            "data" : {"title": "エラー" , "message" : "活動記録が見つかりませんでした。"},
            "width": "400px",
          });
        } else {
          this.dialog.open(AlertDialogComponent, {
            "data" : {"title": "システムエラー" , "message" : "システムエラーが発生しました。"},
            "width": "400px",
          });
        }
      }
    );
  }

  update() {
    this.overlayRef.attach(new ComponentPortal(MatSpinner));

    let activityDate = this.datePipe.transform(this.activityDate, "yyyy-MM-dd").toString();
    let body: UpdateActivityBody = {
      "activityTime": this.activityTime,
      "burnedCalories": this.burnedCalories,
      "ranDistance": this.ranDistance
    };

    let response = this.activitiesService.updateActivity(activityDate, body);
    response.subscribe(
      res => {
        this.overlayRef.detach();
        this.dialog.open(AlertDialogComponent, {
          "data" : {"title": "更新完了" , "message" : "更新が完了しました。"},
          "width": "400px",
        });
      },
      err => {
        this.overlayRef.detach();
        this.dialog.open(AlertDialogComponent, {
          "data" : {"title": "システムエラー" , "message" : "システムエラーが発生しました。"},
          "width": "400px",
        });
      }
    );
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        { title: '活動記録/検索', cols: 2, rows: 1 },
        { title: '活動記録/更新', cols: 2, rows: 1 },
      ];
    })
  );

}
