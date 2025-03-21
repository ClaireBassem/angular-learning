import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidDomainValidator(hosts: string[]) : ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value?.toLowerCase();
        const hosts = ['gmail.com', 'yahoo.com', 'outlook.com'];
        if(!value){
            return null;
        }
        const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);
        return matches ? null : {invalidEmailDomain: true} ;
    
    }
}
