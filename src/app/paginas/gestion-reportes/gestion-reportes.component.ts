import { Component } from '@angular/core';​​
import { ReporteDTO } from '../../dto/reporte-dto';
import { ReportesService } from '../../servicios/reportes.service';
import { RouterModule } from '@angular/router';


@Component({
 selector: 'app-gestion-reportes',
 standalone: true,
 imports: [RouterModule],
 templateUrl: './gestion-reportes.component.html',
 styleUrl: './gestion-reportes.component.css'
})
export class GestionReportesComponent {


 reportes: ReporteDTO[];
 seleccionados: ReporteDTO[];
 textoBtnEliminar: string;

 constructor(public reportesService: ReportesService) {
   this.reportes = reportesService.listar();
 }


 public seleccionar(reporte: ReporteDTO, estado: boolean) {


 if (estado) {
   this.seleccionados.push(reporte);
 } else {
   this.seleccionados.splice(this.seleccionados.indexOf(reporte), 1);
 }


 this.actualizarMensaje();
}


private actualizarMensaje() {
 const tam = this.seleccionados.length;


 if (tam != 0) {
   if (tam == 1) {
     this.textoBtnEliminar = "1 elemento";
   } else {
     this.textoBtnEliminar = tam + " elementos";
   }
 } else {
   this.textoBtnEliminar = "";
 }


}



}

