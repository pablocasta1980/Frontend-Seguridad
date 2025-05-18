import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(7)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Datos enviados:', this.loginForm.value);
      // Aquí llamarías a tu servicio de autenticación
    } else {
      console.log('Formulario inválido');
    }
  }
}