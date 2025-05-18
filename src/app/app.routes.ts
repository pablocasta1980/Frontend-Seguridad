import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { CrearReporteComponent } from './paginas/crear-reporte/crear-reporte.component';
import { GestionReportesComponent } from './paginas/gestion-reportes/gestion-reportes.component';


export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'crear-reporte', component: CrearReporteComponent },
   { path: "gestion-reportes", component: GestionReportesComponent },

   { path: "**", pathMatch: "full", redirectTo: "" }
];
