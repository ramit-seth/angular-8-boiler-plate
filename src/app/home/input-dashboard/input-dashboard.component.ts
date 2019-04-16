import { Component, OnInit, OnChanges } from "@angular/core";
import {
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { BootstrapInputConfigInterface } from "src/app/shared/modules/ng-bootstrap-input/ng-bootstrap-input";
import { PASSWORD_MESSAGES } from "src/app/shared/modules/ng-bootstrap-input/messages/password/password.messages";

@Component({
  selector: "app-input-dashboard",
  templateUrl: "./input-dashboard.component.html",
  styleUrls: ["./input-dashboard.component.scss"]
})
export class InputDashboardComponent implements OnInit {
  appInputNewPasswordConfig: BootstrapInputConfigInterface;
  userForm: FormGroup;
  isPasswordValid: boolean = false;
  constructor() {}

  ngOnInit() {
    this.initialiseForm();

    // Field New Password
    this.appInputNewPasswordConfig = {
      type: "text",
      label: "Enter Password",
      name: "password",
      form: this.userForm,
      validationConfig: {
        required: {
          value: true
        },
        minLength: {
          value: 8,
          message: "Must be eight characters"
        },
        customValidation: {
          value: "password",
          password: passwordValidator()
        }
        // maskArray: this.zipCodeMask,
      }
    };
  }

  initialiseForm() {
    this.userForm = new FormGroup({
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        passwordValidator()
      ])
    });

    this.userForm.statusChanges.subscribe((status: string) => {
      console.log(status);
      if (status && status.toLowerCase() === "valid") {
        this.isPasswordValid = true;
      } else {
        this.isPasswordValid = false;
      }
    });
  }
}

export function passwordValidator(): ValidatorFn {
  let passwordErrorArray: Array<any> = [];
  const lowerCase: RegExp = new RegExp(/[a-z]/);
  const upperCase: RegExp = new RegExp(/[A-Z]/);
  const haveNumber: RegExp = new RegExp(/[0-9]/);
  const specialChar: RegExp = new RegExp(/[*$@!#%&()^~{}]+/);

  return (control: AbstractControl): { [key: string]: any } | null => {
    passwordErrorArray = [];
    if (control.value) {
      if (!lowerCase.test(control.value) && control.dirty) {
        pushErrorMessage(passwordErrorArray, PASSWORD_MESSAGES.lowerCase);
      }

      if (!upperCase.test(control.value) && control.dirty) {
        pushErrorMessage(passwordErrorArray, PASSWORD_MESSAGES.upperCase);
      }

      if (!haveNumber.test(control.value) && control.dirty) {
        pushErrorMessage(passwordErrorArray, PASSWORD_MESSAGES.number);
      }

      if (!specialChar.test(control.value) && control.dirty) {
        pushErrorMessage(passwordErrorArray, PASSWORD_MESSAGES.specialChar);
      }

      if (passwordErrorArray.length > 0) {
        const errorObject = passwordErrorArray.map(val => val.message);
        return { passwordError: true, messages: errorObject };
      }
    }
    return null;
  };
}

export function pushErrorMessage(errMsgArray: Array<any>, errorMessage: any): void {
  if (!errMsgArray.includes(errorMessage)) {
    errMsgArray.push(errorMessage);
  }
}
