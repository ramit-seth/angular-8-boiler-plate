import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserService } from "./services/user.service";
import { AuthApiService } from "./services/auth-api.service";
import {
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialLoginModule
} from "angular-6-social-login";
import { CLIENT_IDS } from "../auth/auth.constants";

@NgModule({
  declarations: [],
  imports: [CommonModule, SocialLoginModule],
  providers: [
    UserService,
    AuthApiService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class CoreModule {}

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
