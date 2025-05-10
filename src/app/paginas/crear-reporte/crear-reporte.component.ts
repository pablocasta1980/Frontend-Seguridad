import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ReportesService } from '../../servicios/reportes.service';
import { CommonModule } from '@angular/common';
import { MapaService } from '../../servicios/mapa.service'; // <-- Nueva importación


@Component({
  selector: 'app-crear-reporte',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-reporte.component.html',
  styleUrl: './crear-reporte.component.css'
})
export class CrearReporteComponent implements OnInit{

  crearReporteForm!: FormGroup;
  categorias: string[];
  ciudades: string[] = [    //opcion inicializando fuera del constructor
    'Armenia',
    'Calarcá',
    'Circasia',
    'Filandia', 
    'Génova',
    'Montenegro',
    'Quimbaya',
    'Salento'
  ];

  constructor(
    private formBuilder: FormBuilder,
    public reportesService: ReportesService,
    private mapaService: MapaService //se agreaga mapa de servicios
  ) {
    this.categorias = ['Mascota Perdida', 'Robo', 'Alumbrado público', 'Huecos en la vía'];
    //this.ciudades = ['Armenia', 'Calarcá', 'Circasia', 'Filandia', 'Génova', 'Montenegro', 'Quimbaya', 'Salento'];
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.mapaService.crearMapa();
   
   
    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.crearReporteForm.get('ubicacion')?.setValue({
        latitud: marcador.lat,
        longitud: marcador.lng,
      });
    });
   
   
   }
   

  


  private crearFormulario() {
    this.crearReporteForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      ciudad: ['', Validators.required],
      ubicacion: ['', Validators.required],
      imagen: ['', Validators.required],
    });
  }

  public crearReporte() {
    if (this.crearReporteForm.invalid) {
      Swal.fire("Error", "Por favor complete todos los campos.", "error");
      return;
    }

    this.reportesService.crear(this.crearReporteForm.value);
    Swal.fire("Éxito!", "Se ha creado un nuevo reporte.", "success");
    this.crearReporteForm.reset();
  }

  /*public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.crearReporteForm.get('imagen')?.setValue(file.name);
    }
  }*/


  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const random = Math.floor(Math.random() * 100);
      const fakeImageUrl = `https://picsum.photos/300?random=${random}`;
      this.crearReporteForm.get('imagen')?.setValue(fakeImageUrl);
    }
  }


}
