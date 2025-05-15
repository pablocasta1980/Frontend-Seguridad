
import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
import { LoginDTO } from '../../dto/login-dto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
     private tokenService: TokenService,private router: Router ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });    

    
  }


   

public login() {
 const loginDTO = this.loginForm.value as LoginDTO;
 
 

 this.authService.iniciarSesion(loginDTO).subscribe({
   next: (data) => {
    console.log("Login successful", data);
     this.tokenService.login(data.mensaje.token);  

     const rol = this.tokenService.getRol();
     const estado = this.tokenService.getEstado();

      if (rol === 'ADMINISTRADOR' && estado === 'ACTIVO') {
        Swal.fire({
        icon: 'success',
        title: '¡Ingreso exitoso!',
        text: 'Bienvenido al sistema',
        timer: 5000,  // Auto-close after 2 seconds
        showConfirmButton: false
        
      })
        this.router.navigate(['/gestion-reportes']);


      } else if (rol === 'CLIENTE' && estado === 'ACTIVO') {

        Swal.fire({
        icon: 'success',
        title: '¡Ingreso exitoso!',
        text: 'Bienvenido al sistema',
        timer: 5000,  // Auto-close after 2 seconds
        showConfirmButton: false
        
      })
        
        this.router.navigate(['/inicio']);
      }

   },
   error: (error) => {
     Swal.fire({
       icon: 'error',
       title: 'Error',
       text: error.error.mensaje
     });
   },
 });
}


}
