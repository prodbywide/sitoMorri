import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';

// Validator
function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  };
}


// Component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  // Button Disabler
  isDisabled = true;
  // Creazione FormGroup  
  info: FormGroup;


  constructor(private formDataService: FormDataService, private router: Router) {}

  // Inizializzatione
  ngOnInit(): void {
    this.info = new FormGroup({
      username: new FormControl(null, [Validators.required, noWhitespaceValidator()]),
      password: new FormControl(null, [Validators.required, noWhitespaceValidator()])
    })
  }

  // Change btn state
  buttonEnabler () {
    // Recupero campi
    const username = this.info.get('username')!;
    const password = this.info.get('password')!;

    if (!username.hasError('required') && !password.hasError('required')
        && !username.hasError('whitespace') && !password.hasError('whitespace')) {
      this.isDisabled = false;
    } else this.isDisabled = true;
  }

  // Passaggio dati
  submitForm() {
    this.formDataService.setFormData(this.info.value);
    this.router.navigate(['/redirecting']);
  }
}
