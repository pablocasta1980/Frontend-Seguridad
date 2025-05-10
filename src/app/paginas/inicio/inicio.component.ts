import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { ReportesService } from '../../servicios/reportes.service'; // 1. Importa el servicio

@Component({
 selector: 'app-inicio',
 standalone: true,
 imports: [],
 templateUrl: './inicio.component.html',
 styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {


  constructor(
    private mapaService: MapaService,
    private reportesService: ReportesService // 2. Inyecta el servicio
  ) { }


 ngOnInit(): void {
  this.mapaService.crearMapa();
  const reportes = this.reportesService.listar();
  this.mapaService.pintarMarcadores(reportes);
 }
 


}
