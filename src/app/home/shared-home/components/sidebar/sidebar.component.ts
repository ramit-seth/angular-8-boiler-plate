import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isOpen: boolean;
  public showReports: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  public goToDashboard(): void {
    this.showReports = false;
    this.router.navigate(['home/dashboard']);
  }

  public goToReportOne(): void {
    this.router.navigate(['home/reports/report-one']);
  }

  public goToReportTwo(): void {
    this.router.navigate(['home/reports/report-two']);
  }

  public activateReports(): void {
    this.showReports = !this.showReports;
  }

}
