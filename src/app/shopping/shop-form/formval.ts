import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

let number = /[0-9]+/;
let low = /[a-z]+/;
let up = /[A-Z]+/;
let symbol = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]+/;

export function numberValidate(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;
        const hasNumber=number.test(value);
        const hasup=up.test(value);
        const haslow=low.test(value);
        const hassymbol=symbol.test(value)
        return !(hasNumber && !hasup && !haslow && !hassymbol) ? {justNumber:true}:null;
    }
}