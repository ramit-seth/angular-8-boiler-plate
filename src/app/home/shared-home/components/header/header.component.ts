import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/core/services/auth-api.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router, private authAPIService: AuthApiService) {}

  ngOnInit() {}

  public toggle(): void {
    this.toggleSidebar.emit(!this.isOpen);
  }

  public logout(): void {
    if (localStorage.getItem("userName")) {
      this.authAPIService.signOut().then(data => {
        console.log("Logged out successfully.");
        localStorage.clear();
      });
    }
    this.router.navigate(["auth/login"]);
  }
}
