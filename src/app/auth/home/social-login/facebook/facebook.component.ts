import { Component, OnInit } from "@angular/core";
import { AuthApiService } from "src/app/core/services/auth-api.service";
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angular-6-social-login";
import { CLIENT_IDS } from "src/app/auth/auth.constants";
import { Router } from "@angular/router";

@Component({
  selector: "app-facebook",
  templateUrl: "./facebook.component.html",
  styleUrls: ["./facebook.component.scss"]
})
export class FacebookComponent implements OnInit {
  FB: any;
  constructor(private authAPIService: AuthApiService, private router: Router) {}

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      this.FB.init({
        appId: CLIENT_IDS.FACEBOOK_ID,
        cookie: true,
        xfbml: true,
        version: "v3.1"
      });
      this.FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  onSignIn() {
    this.authAPIService
      .socialLogin(FacebookLoginProvider.PROVIDER_ID)
      .then(userData => {
        if (userData) {
          console.log("Data Received: ", userData);
          localStorage.setItem("userName", userData["name"]);
          this.router.navigate(["home"]);
        }
      });
  }
}
