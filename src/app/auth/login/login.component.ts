import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showAlert: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public login(): void {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      this.router.navigate(['home']);
    } else {
      this.showAlert = true;
    }
  }

  public goToSignup(): void {
    this.router.navigate(['auth/signup']);
  }

  public goToForgot(): void {
    this.router.navigate(['auth/forgot']);
  }
}
