import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { calcularEdad } from "../utilities/utilities";

export function legalAge(): ValidatorFn {
    return (control: AbstractControl):ValidationErrors | null => {
        const date = new Date(control.value);
        const calculateAge = calcularEdad(date)
        const isLegalAge = calculateAge > 3;
  
        
        return isLegalAge ? null :  {legalAge : { value: control.value}}

    }
}
