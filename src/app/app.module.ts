import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import { ChartActivityTimeComponent } from './chart-activity-time/chart-activity-time.component';
import { ChartBurnedCaloriesComponent } from './chart-burned-calories/chart-burned-calories.component';
import { ChartRanDistanceComponent } from './chart-ran-distance/chart-ran-distance.component';
import { ReportActivityComponent } from './report-activity/report-activity.component';

import { DataService } from './app.data.service';
import { ManageActivityComponent } from './manage-activity/manage-activity.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartActivityTimeComponent,
    ChartBurnedCaloriesComponent,
    ChartRanDistanceComponent,
    ReportActivityComponent,
    ManageActivityComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    OverlayModule,
    LayoutModule,
    ChartsModule
  ],
  providers: [
    DatePipe,
    DataService
  ],
  entryComponents: [AlertDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
