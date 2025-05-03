import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-reporte',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-reporte.component.html',
  styleUrl: './crear-reporte.component.css'
})
export class CrearReporteComponent {

  crearReporteForm!: FormGroup;
  categorias: string[];

  constructor(private formBuilder: FormBuilder) {
    this.categorias = [
      'Mascota Perdida',
      'Robo',
      'Alumbrado público',
      'Huecos en la vía'
    ];
    this.crearFormulario();
  }

  ciudades: string[] = [
    'Armenia',
    'Calarcá',
    'Circasia',
    'Filandia', 
    'Génova',
    'Montenegro',
    'Quimbaya',
    'Salento'
  ];

  

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

   public crearReporte() {
    console.log(this.crearReporteForm.value);
   }
   


   public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      const file = files[0];
      this.crearReporteForm.get('imagen')?.setValue(file.name);
    }
   }
   

   
}