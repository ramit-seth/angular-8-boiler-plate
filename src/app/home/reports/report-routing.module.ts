import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { ReportOneComponent } from './report-one/report-one.component';
import { ReportTwoComponent } from './report-two/report-two.component';

const reportRoutes: Routes = [
  { path: 'report-one', component: ReportOneComponent },
  { path: 'report-two', component: ReportTwoComponent },
  { path: '', redirectTo: 'report-one', pathMatch: 'full' }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(reportRoutes)],
  declarations: [ReportOneComponent, ReportTwoComponent],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
