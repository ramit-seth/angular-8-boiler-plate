import { Component, Input, OnInit } from "@angular/core";
import { BootstrapInputConfigInterface } from "../../../ng-bootstrap-input/bootstrap-input-config";
import {
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { InputComponentInterface } from "../../../ng-bootstrap-input/inputs/input-component-interface";
import { FormValidationService } from "../../../ng-bootstrap-input/form-validation.service";
// import { PhoneValidators } from '@shared-validators/phone.validator';

@Component({
  selector: "app-bootstrap-input-text",
  templateUrl: "bootstrap-input-text.component.html"
})
export class BootstrapInputTextComponent
  implements InputComponentInterface, OnInit {
  @Input() inputConfig: BootstrapInputConfigInterface;
  control: FormControl;
  validators: ValidatorFn[] = [];
  maskConfig = {};
  regex;
  errorMsgArray: Array<string> = [];

  get label() {
    return this.inputConfig.label
      ? this.inputConfig.label
      : this.inputConfig.name;
  }

  get maskArray() {
    return this.inputConfig.validationConfig.maskArray;
  }

  get minLength() {
    return this.inputConfig.validationConfig.minLength;
  }

  get required() {
    return this.inputConfig.validationConfig.required;
  }

  get validationRegex() {
    return this.inputConfig.validationConfig.validationRegex;
  }

  get maxLength() {
    return this.inputConfig.validationConfig.maxLength;
  }

  get customValidation() {
    return this.inputConfig.validationConfig.customValidation;
  }

  constructor(private formValidationService: FormValidationService) {}

  ngOnInit(): void {
    // this.configureInputMask();
    this.buildValidators();
  }

  configureInputMask() {
    this.maskConfig = {};
    if (this.maskArray) {
      this.maskConfig["mask"] = this.maskArray;
      this.maskConfig["modelClean"] = true;
    } else {
      this.maskConfig["mask"] = false;
    }
  }

  trimToMaxLength(inputConf: any) {
    return inputConf.substring(0, this.maxLength.value);
  }

  buildValidators(): void {
    if (this.required && this.required.value) {
      this.validators.push(Validators.required);
      if (!this.required.message) {
        this.required.message = `${this.label} is required`;
      }
    }

    if (this.minLength && this.minLength.value) {
      this.validators.push(Validators.minLength(this.minLength.value));
      if (!this.minLength.message) {
        this.minLength.message =
          "Length should be at least " + this.minLength.value + " characters";
      }
    }

    if (this.maxLength && this.maxLength.value) {
      this.validators.push(Validators.maxLength(this.maxLength.value));
      if (!this.maxLength.message) {
        this.maxLength.message =
          "Length should be less than " + this.maxLength.value + " characters";
      }
    }

    if (this.validationRegex && this.validationRegex.value) {
      this.validators.push(Validators.pattern(this.validationRegex.value));
      if (!this.validationRegex.message) {
        this.validationRegex.message = `${this.label} is invalid`;
      }
    }

    if (this.customValidation && this.customValidation.value === "password") {
      if (typeof this.customValidation.password === "function") {
        this.validators.push(this.customValidation.password);
      }
      if (!this.customValidation.message) {
        this.customValidation.message = `${this.label} is invalid`;
      }
    }

    if (this.customValidation && this.customValidation.value === "phone") {
      if (!this.customValidation.message) {
        this.customValidation.message = `${this.label} is invalid`;
      }
    }
  }

  hasError(): boolean {
    let hasError = false;
    if (this.required && this.required.value) {
      hasError = this.formValidationService.hasError(
        this.inputConfig.form,
        this.inputConfig.name,
        "required"
      );

      this.inputConfig.validationConfig.errorMessage = this.required.message;
      if (hasError) {
        this.pushErrorMessage(this.required.message);
      } else {
        this.popErrorMessage(this.required.message);
      }
    }

    if (this.minLength && this.minLength.value) {
      hasError = this.formValidationService.hasError(
        this.inputConfig.form,
        this.inputConfig.name,
        "minlength"
      );
      this.inputConfig.validationConfig.errorMessage = this.minLength.message;
      if (hasError) {
        this.pushErrorMessage(this.minLength.message);
      } else {
        this.popErrorMessage(this.minLength.message);
      }
    }

    if (this.maxLength && this.maxLength.value) {
      hasError = this.formValidationService.hasError(
        this.inputConfig.form,
        this.inputConfig.name,
        "maxlength"
      );
      this.inputConfig.validationConfig.errorMessage = this.maxLength.message;
      if (hasError) {
        this.pushErrorMessage(this.maxLength.message);
      } else {
        this.popErrorMessage(this.maxLength.message);
      }
    }

    if (this.validationRegex && this.validationRegex.value) {
      hasError = this.formValidationService.hasError(
        this.inputConfig.form,
        this.inputConfig.name,
        "pattern"
      );
      this.inputConfig.validationConfig.errorMessage = this.validationRegex.message;
      if (hasError) {
        this.pushErrorMessage(this.validationRegex.message);
      } else {
        this.popErrorMessage(this.validationRegex.message);
      }
    }

    if (this.customValidation && this.customValidation.value === "password") {
      hasError = this.formValidationService.hasError(
        this.inputConfig.form,
        this.inputConfig.name,
        "passwordError"
      );
      if (this.inputConfig.form.controls[this.inputConfig.name].errors) {
        this.inputConfig.validationConfig.errorMessage = this.inputConfig.form.controls[
          this.inputConfig.name
        ].errors.messages;
      }

      if (hasError) {
        this.pushErrorMessage(this.inputConfig.validationConfig.errorMessage);
      } else {
        this.popErrorMessage(this.inputConfig.validationConfig.errorMessage);
      }
    }

    if (this.customValidation && this.customValidation.value === "zip") {
      hasError = this.formValidationService.hasError(
        this.inputConfig.form,
        this.inputConfig.name,
        "zipLength"
      );
      this.inputConfig.validationConfig.errorMessage = this.customValidation.message;
      if (hasError) {
        this.pushErrorMessage(this.customValidation.message);
      } else {
        this.popErrorMessage(this.customValidation.message);
      }
    }

    if (this.customValidation && this.customValidation.value === "phone") {
      hasError = this.formValidationService.hasError(
        this.inputConfig.form,
        this.inputConfig.name,
        "phoneLength"
      );
      this.inputConfig.validationConfig.errorMessage = this.customValidation.message;
    }

    return this.errorMsgArray.length > 0;
  }

  isValid(): boolean {
    return this.formValidationService.isValid(
      this.inputConfig.form,
      this.inputConfig.name
    );
  }

  pushErrorMessage(errorMessage: string | Array<string>) {
    if (errorMessage instanceof Array) {
      errorMessage.forEach(msg => {
        // console.log(msg)
        if (!this.errorMsgArray.includes(msg)) {
          this.errorMsgArray.push(msg);
        } else {
          this.popErrorMessage(msg);
        }
      });

      //   this.errorMsgArray = [...this.errorMsgArray, ...errorMessage];
    } else {
      if (!this.errorMsgArray.includes(errorMessage))
        this.errorMsgArray.push(errorMessage);
    }
  }

  popErrorMessage(errorMessage: string | Array<string>) {
    // console.log(typeof errMess);
    if (typeof errorMessage === "undefined") {
      //   do nothing
    } else {
      this.errorMsgArray = this.errorMsgArray.filter(
        message => message != errorMessage
      );
    }
  }

  getFormControl(): AbstractControl {
    return this.inputConfig.form.controls[this.inputConfig.name];
  }

  getMaxLength() {
    return this.maxLength && this.maxLength.value
      ? this.maxLength.value
      : false;
  }

  getFormControlLabel() {
    return this.inputConfig.label ? this.inputConfig.label : false;
  }
}
