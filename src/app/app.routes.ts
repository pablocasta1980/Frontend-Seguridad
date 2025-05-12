import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { CrearReporteComponent } from './paginas/crear-reporte/crear-reporte.component';
import { GestionReportesComponent } from './paginas/gestion-reportes/gestion-reportes.component';
import { DetalleReporteComponent } from './paginas/detalle-reporte/detalle-reporte.component';
import { PresentacionComponent } from './paginas/presentacion/presentacion.component';



export const routes: Routes = [
   { path: '', component: PresentacionComponent },
   { path: 'inicio', component: InicioComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'crear-reporte', component: CrearReporteComponent }, 
   { path: "gestion-reportes", component: GestionReportesComponent },
   { path: 'detalle-reporte/:id', component: DetalleReporteComponent },
   { path: 'editar-reporte/:id', component: CrearReporteComponent },
   { path: "**", pathMatch: "full", redirectTo: "" }
];

