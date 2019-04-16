import { FormGroup } from "@angular/forms";

export class BootstrapFormGroup extends FormGroup {
  submitted: boolean = false;

  setFormSubmitted() {
    this.submitted = true;
  }
}
