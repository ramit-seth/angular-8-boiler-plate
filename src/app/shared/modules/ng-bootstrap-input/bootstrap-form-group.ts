import { FormGroup } from '@angular/forms';

export class BootstrapFormGroup extends FormGroup {

    submitted = false;

    setFormSubmitted() {
        this.submitted = true;
    }

}
