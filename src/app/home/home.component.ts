import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName:string;
  public isOpen: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isOpen = true;
    if(localStorage.getItem("userName")){
      this.userName = localStorage.getItem("userName");
    }
  }

  public toggleSidebar(event: boolean): void {
    this.isOpen = event;
  }

}
