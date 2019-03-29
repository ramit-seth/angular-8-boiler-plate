import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { AuthApiService } from "src/app/auth/auth-api.service";
import { CLIENT_IDS } from "src/app/auth/auth.constants";

declare const Buffer;

@Component({
  selector: "app-twitter",
  templateUrl: "./twitter.component.html",
  styleUrls: ["./twitter.component.scss"]
})
export class TwitterComponent implements OnInit {
  constructor(
    private authAPIService: AuthApiService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  onSignIn() {
      var headers = new HttpHeaders();
      
      headers.set('Content-Type', 'application/X-www-form-urlencoded');
      
      this.http.get('http://localhost:3000/authenticate',{headers: headers}).subscribe((res) => {
        console.log(res);
      });
    }
    // this.http.get("https://api.twitter.com/oauth/authenticate?oauth_token=aOKQBaHL9CU1RBW2H9Vm8XlS3").subscribe(res => {
    //   console.log(res);
    // });
}
