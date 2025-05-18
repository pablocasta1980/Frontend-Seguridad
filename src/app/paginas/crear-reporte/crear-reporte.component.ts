import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-reporte',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-reporte.component.html',
  styleUrl: './crear-reporte.component.css'
})
export class CrearReporteComponent {

  categorias: string[];
  ciudades: string[];
  crearReporteForm!: FormGroup;


constructor(private formBuilder: FormBuilder) {
 this.crearFormulario();
 this.categorias = [
     'Mascota Perdida',
     'Robo',
     'Alumbrado público',
     'Huecos en la vía'
 ];
this.ciudades = [
     'ARMENIA',
     'PEREIRA',
     'BOGOTA',
     'CALI'
 ];



}

private crearFormulario() {
 this.crearReporteForm = this.formBuilder.group({
   titulo: ['', [Validators.required]],
   descripcion: ['', [Validators.required]],
   categoria: ['', [Validators.required]],
   ciudad: ['', [Validators.required]],
   ubicacion: ['', [Validators.required]],
   imagen: ['', [Validators.required]],
 });
}

public onFileChange(event: any) {
 if (event.target.files.length > 0) {
   const files = event.target.files;
   const file = files[0];
   this.crearReporteForm.get('imagen')?.setValue(file.name);
 }
}

public crearReporte() {
 console.log(this.crearReporteForm.value);
}





}
