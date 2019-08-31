import { AbstractControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    static isValidRadius() {

        return (control: AbstractControl): Validators => {

            const radius = control.value;

            if (radius) {

                if (radius > 50 || radius < 1) {
                    return { radiusNotValid: true };
                }

                return null;
            }
        };
    }

    constructor() { }
}
