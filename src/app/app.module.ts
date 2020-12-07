import { BrowserModule } from '@angular/platform-browser';
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
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import { ChartActivityTimeComponent } from './chart-activity-time/chart-activity-time.component';
import { ChartBurnedCaloriesComponent } from './chart-burned-calories/chart-burned-calories.component';
import { ChartRanDistanceComponent } from './chart-ran-distance/chart-ran-distance.component';
import { ReportActivityComponent } from './report-activity/report-activity.component';

import { DataService } from './app.data.service';
 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartActivityTimeComponent,
    ChartBurnedCaloriesComponent,
    ChartRanDistanceComponent,
    ReportActivityComponent
  ],
  imports: [
    BrowserModule,
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
    LayoutModule,
    ChartsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
