import { ValidatorFn, AbstractControl } from "@angular/forms";

export class ZipValidators {
  static zipLength(zlength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // debugger;
      return control.value.length === zlength ? null : { zipLength: true };
    };
  }
}
