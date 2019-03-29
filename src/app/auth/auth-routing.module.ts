import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SocialLoginComponent } from "./home/social-login/social-login.component";
import { LoginComponent } from "./home/login/login.component";
import { GoogleComponent } from "./home/social-login/google/google.component";
import { AuthApiService } from "./auth-api.service";
import {
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angular-6-social-login";
import { CLIENT_IDS } from "./auth.constants";
import { FacebookComponent } from './home/social-login/facebook/facebook.component';
import { TwitterComponent } from './home/social-login/twitter/twitter.component';

const authRoutes: Routes = [
  { path: "login", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "forgot", component: ForgotPasswordComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(authRoutes)],
  declarations: [
    HomeComponent,
    SignupComponent,
    ForgotPasswordComponent,
    SocialLoginComponent,
    LoginComponent,
    GoogleComponent,
    FacebookComponent,
    TwitterComponent
  ],
  providers: [
    AuthApiService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule {}

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(CLIENT_IDS.GOOGLE_ID)
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider(CLIENT_IDS.FACEBOOK_ID)
    }
  ]);
  return config;
}
