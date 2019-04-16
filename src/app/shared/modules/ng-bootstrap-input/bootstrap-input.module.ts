import { NgModule } from '@angular/core';
import { BootstrapInputComponent } from '../ng-bootstrap-input/bootstrap-input.component';
import { CommonModule } from '@angular/common';
import { FormValidationService } from '../ng-bootstrap-input/form-validation.service';
import { BootstrapInputPhoneComponent } from '../ng-bootstrap-input/inputs/phone/bootstrap-input-phone.component';
import { BootstrapInputTextComponent } from '../ng-bootstrap-input/inputs/text/bootstrap-input-text.component';
import { BootstrapInputSelectComponent } from '../ng-bootstrap-input/inputs/select/bootstrap-select.component';
import { BootstrapInputEmailComponent } from '../ng-bootstrap-input/inputs/email/bootstrap-input-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule
    ],
    declarations: [
        BootstrapInputComponent,
        BootstrapInputPhoneComponent,
        BootstrapInputTextComponent,
        BootstrapInputEmailComponent,
        BootstrapInputEmailComponent,
        BootstrapInputSelectComponent
    ],
    exports: [
        BootstrapInputComponent,
        BootstrapInputPhoneComponent,
        BootstrapInputTextComponent,
        BootstrapInputEmailComponent,
        BootstrapInputEmailComponent,
        BootstrapInputSelectComponent
    ],
    providers: [
        FormValidationService
    ]
} )

export class BootstrapInputModule { }
