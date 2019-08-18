import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedHomeModule } from './shared-home/shared-home.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [SharedHomeModule, RouterModule.forChild(homeRoutes)],
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
