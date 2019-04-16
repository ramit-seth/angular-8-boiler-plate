import { Component, Input, OnInit } from '@angular/core';
import { BootstrapInputConfigInterface } from '../../../ng-bootstrap-input/bootstrap-input-config';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { InputComponentInterface } from '../../../ng-bootstrap-input/inputs/input-component-interface';
import { FormValidationService } from '../../../ng-bootstrap-input/form-validation.service';
import { BootstrapFormGroup } from '../../../ng-bootstrap-input/bootstrap-form-group';


@Component({
    selector: 'app-bootstrap-select',
    templateUrl: 'bootstrap-select.component.html'
})

export class BootstrapInputSelectComponent implements InputComponentInterface, OnInit {

    @Input() inputConfig: BootstrapInputConfigInterface;
    control: FormControl;
    validators: ValidatorFn[] = [];
    maskConfig = null;
    regex;

    ngOnInit(): void {
        this.configureInputMask();
        this.buildValidators();
        this.control = new FormControl(null, this.validators);
        this.inputConfig.form.addControl(this.inputConfig.name, this.control);
    }

    constructor(private formValidationService: FormValidationService) { }

    configureInputMask() {
    }

    trimToMaxLength(confirmedValue: string): string {
        return;
    }

    buildValidators(): void {

        if (this.inputConfig.validationConfig.required && this.inputConfig.validationConfig.required.value) {
            this.validators.push(Validators.required);
            if (!this.inputConfig.validationConfig.required.message) {
                this.inputConfig.validationConfig.required.message = 'This is a required field';
            }
        }
    }

    hasError(): boolean {
        let hasError = false;
        if (this.inputConfig.validationConfig.required && this.inputConfig.validationConfig.required.value) {
            hasError = this.formValidationService.hasError(this.inputConfig.form, this.inputConfig.name, 'required');
            this.inputConfig.validationConfig.errorMessage = this.inputConfig.validationConfig.required.message;
        }

        return hasError;
    }

    isValid(): boolean {
        return this.formValidationService.isValid(this.inputConfig.form, this.inputConfig.name);
    }

    getFormControl(): AbstractControl {
        return this.inputConfig.form.controls[this.inputConfig.name];
    }
}
