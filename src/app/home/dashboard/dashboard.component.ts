import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName:string;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("userName")) {
      this.userName = localStorage.getItem("userName");
    }
  }

}
