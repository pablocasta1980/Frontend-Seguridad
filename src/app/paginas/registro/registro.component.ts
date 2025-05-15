import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { CrearUsuarioDTO } from '../../dto/crear-usuario-dto';
import Swal from 'sweetalert2';


@Component({
 selector: 'app-registro',
 imports: [ReactiveFormsModule],
 templateUrl: './registro.component.html',
 styleUrl: './registro.component.css'
})
export class RegistroComponent{


 registroForm!: FormGroup;

 constructor(private formBuilder: FormBuilder,private usuarioService: UsuarioService) {   

    this.crearFormulario();
}

 private crearFormulario() {
    this.registroForm = this.formBuilder.group({     
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],     
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]],
      confirmaPassword: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]]  


    },
    { validators: this.passwordsMatchValidator } as AbstractControlOptions
    

    );
 }

 public passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmaPassword = formGroup.get('confirmaPassword')?.value;
   
   
    // Si las contraseñas no coinciden, devuelve un error, de lo contrario, null
    return password == confirmaPassword ? null : { passwordsMismatch: true };
   }
   



 public registrar() {
   console.log(this.registroForm.value);
 const crearUsuario = this.registroForm.value as CrearUsuarioDTO;


 this.usuarioService.crear(crearUsuario).subscribe({
   next: (data) => {
     Swal.fire({
       title: 'Éxito',
       text: data.mensaje?.mensaje,
       //text:'Registro exitoso',
       icon: 'success',
       confirmButtonText: 'Aceptar'
     });
   },
   error: (error) => {
     Swal.fire({
       title: 'Error',
       text: error.error.mensaje,
       icon: 'error',
       confirmButtonText: 'Aceptar'
     });


   },
 });


}

   
 
 

}

