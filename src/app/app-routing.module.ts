import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageActivityComponent } from './manage-activity/manage-activity.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'manageActivity', component: ManageActivityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
