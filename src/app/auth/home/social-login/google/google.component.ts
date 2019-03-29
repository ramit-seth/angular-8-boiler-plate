import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GoogleLoginProvider } from "angular-6-social-login";

import { AuthApiService } from "src/app/core/services/auth-api.service";

@Component({
  selector: "app-google",
  templateUrl: "./google.component.html",
  styleUrls: ["./google.component.scss"]
})
export class GoogleComponent implements OnInit {
  constructor(private authAPIService: AuthApiService, private router: Router) {}

  ngOnInit() {}

  onSignIn() {
    console.log(GoogleLoginProvider.PROVIDER_ID);

    this.authAPIService
      .socialLogin(GoogleLoginProvider.PROVIDER_ID)
      .then(userData => {
        if (userData) {
          console.log("Data Received: ", userData);
          localStorage.setItem("userName", userData["name"]);
          this.router.navigate(["home"]);
        }
      });
  }
}
