import { FormControl, ValidatorFn } from '@angular/forms';
import { BootstrapInputConfigInterface } from '../bootstrap-input-config';

export interface InputComponentInterface {

    inputConfig: BootstrapInputConfigInterface;
    control: FormControl;
    validators: ValidatorFn[];
    maskConfig: object;
    regex: string;

    configureInputMask(): void;
    trimToMaxLength( conformedValue: any ): any;
    buildValidators(): void;
    hasError( fieldName: string, errorName: string ): boolean;
    isValid( fieldName: string ): boolean;

}
