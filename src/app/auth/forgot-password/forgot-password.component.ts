import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.forgotForm = new FormGroup({
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  public forgot(): void {
    this.router.navigate(['auth/login']);
  }

  public goToLogin(): void {
    this.router.navigate(['auth/login']);
  }
}
