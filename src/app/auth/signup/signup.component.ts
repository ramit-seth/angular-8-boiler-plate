import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.required),
      dob: new FormControl('')
    });
  }

  public resetForm(): void {
    this.signupForm.reset();
    this.router.navigate(['auth/login']);
  }

  public signup(): void {
    console.log(this.signupForm.value);
    this.router.navigate(['auth/login']);
  }
}
