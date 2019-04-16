import { FormGroup } from '@angular/forms';

export interface BootstrapInputConfigInterface {
    type: type;
    name: string;
    dataConfig?: any;
    validationConfig?: any;
    form: FormGroup; 
    label?: string;
}

export type type = 'text' | 'phone' | 'email' | 'date' | 'select';

export class BootstrapInputConfig implements BootstrapInputConfigInterface {
    private _type: type;
    private _name: string;
    private _validationConfig: any;
    private _dataConfig: any;
    private _label: string;
    private _form: FormGroup;

    constructor() {
        this._type = 'text';
    }

    public get type(): type {
        return this._type;
    }

    public set type( type2: type ) {
        this._type = type2;
    }

    public get name(): string {
        return this._name;
    }

    public set name( name: string ) {
        this._name = name;
    }

    public get label(): string {
        return this._label;
    }

    public set label( label: string ) {
        this._label = label;
    }

    public get validationConfig(): any {
        return this._validationConfig;
    }

    public set validationConfig( validationConfig: any ) {
        this._validationConfig = validationConfig;
    }

    public get dataConfig(): any {
        return this._dataConfig;
    }

    public set dataConfig( dataConfig: any ) {
        this._dataConfig = dataConfig;
    }

    public get form(): FormGroup {
        return this._form;
    }

    public set form( form: FormGroup ) {
        this._form = form;
    }
}
