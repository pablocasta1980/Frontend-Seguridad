import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
 selector: 'app-registro',
 imports: [ReactiveFormsModule],
 templateUrl: './registro.component.html',
 styleUrl: './registro.component.css'
})
export class RegistroComponent{


 registroForm!: FormGroup;
 ciudades: string[];


constructor(private formBuilder: FormBuilder) { 
  this.ciudades = [
     'ARMENIA',
     'PEREIRA',
     'BOGOTA',
     'CALI'
 ];
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
}




}

