
import { Component } from '@angular/core';​​
import { ReporteDTO } from '../../dto/reporte-dto';
import { ReportesService } from '../../servicios/reportes.service';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
 selector: 'app-gestion-reportes',
 standalone: true,
 imports: [RouterModule],
 templateUrl: './gestion-reportes.component.html',
 styleUrl: './gestion-reportes.component.css'
})
export class GestionReportesComponent {

 reportes: ReporteDTO[];
 seleccionados: ReporteDTO[]; //inicializando en el constructor
 textoBtnEliminar: string; // inicializado en el constructor
 //seleccionados: ReporteDTO[] = []; //segunda opcion inicializar fuera del contructor
 //textoBtnEliminar: string = ''; //segunda opcion inicializar fuera del contructor

 constructor(public reportesService: ReportesService) {
   this.reportes = reportesService.listar();
   this.seleccionados = [];
   this.textoBtnEliminar = '';

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
  this.textoBtnEliminar = tam === 0 ? '' : tam === 1 ? '1 elemento' : `${tam} elementos`;
}

public confirmarEliminacion() {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción cambiará el estado de los reportes a Eliminados.",
    icon: "error",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      this.eliminarReportes();
      Swal.fire("¡Eliminados!", "Los reportes seleccionados han sido eliminados.", "success");
    }
  });
}

public eliminarReportes() {
  this.seleccionados.forEach(e1 => {
    this.reportesService.eliminar(e1.id);
    this.reportes = this.reportes.filter(e2 => e2.id !== e1.id);
  });
  this.seleccionados = [];
  this.actualizarMensaje();
 }
 


}
