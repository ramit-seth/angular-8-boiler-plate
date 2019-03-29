import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";

import { AuthApiService } from "./auth-api.service";
import {
  AuthServiceConfig,
  GoogleLoginProvider,
  SocialLoginModule
} from "angular-6-social-login";
import { CLIENT_IDS } from "./auth.constants";

@NgModule({
  imports: [AuthRoutingModule, SocialLoginModule],
})
export class AuthModule {}

