import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
  standalone: true,
})
export class SignupFormComponent {
  formBuilder = inject(FormBuilder);

  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;

      const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;

      return passwordValid ? null : { securePassword: true };
    };
  }

  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group ({
      password: ['', [Validators.required, this.securePasswordValidator()]],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator()}) 
  });

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordMismatch: true};

    }
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Formulaire envoyé avec succès', this.signUpForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
