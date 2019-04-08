import { Injectable } from "@angular/core";

@Injectable()
export class FormValidationService {
  constructor() {}

  hasError(form, fieldName, errorName): boolean {
    return (
      form.controls[fieldName].dirty &&
      form.controls[fieldName].invalid &&
      form.controls[fieldName].hasError(errorName)
    );
  }

  isValid(form, fieldName) {
    return form.controls[fieldName].dirty && form.controls[fieldName].valid;
  }
}
