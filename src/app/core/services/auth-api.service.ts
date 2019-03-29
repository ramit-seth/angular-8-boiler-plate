import { Injectable } from "@angular/core";

import { AuthService } from "angular-6-social-login";

@Injectable()
export class AuthApiService {
  constructor(
    private socialAuthService: AuthService
  ) {
    console.log("Auth service initiated.");
  }

  socialLogin(providerID: string) {
    return this.socialAuthService.signIn(providerID);
  }

  signOut(){
    return this.socialAuthService.signOut();
  }
}
