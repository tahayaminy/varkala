import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

let number = /[0-9]+/;
let low = /[a-z]+/;
let up = /[A-Z]+/;
let symbol = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/;

export function passLength(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        let length;
        if (value.length >= 4) {
          length=true;
        } else {
          length=false;
        }
        return !(length) ? {passLength:true}:null;
    }
}
export function upper(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      const hasUpperCase = up.test(value);


      return !(hasUpperCase) ? {upper:true}:null;
  }
}
export function lower(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value;

      const hasLowerCase = low.test(value);


      return !(hasLowerCase) ? {lower:true}:null;
  }
}
export function isNumber(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      const hasNumeric = number.test(value);

      return !(hasNumeric) ? {number:true}:null;
  }
}
export function symbols(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      const hasSymbol = symbol.test(value);

      return !(hasSymbol) ? {symbol:true}:null;
  }
}