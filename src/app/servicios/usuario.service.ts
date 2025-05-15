import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaDTO } from '../dto/respuesta-dto';
import { Observable } from 'rxjs';
import { CrearUsuarioDTO } from '../dto/crear-usuario-dto';
import { EditarUsuarioDTO } from '../dto/editar-usuario-dto';


@Injectable({
 providedIn: 'root'
})
export class UsuarioService {


 private usuarioURL = "http://localhost:8081/api/usuarios";
 //private usuarioURL = "https://alertasuq-backend.onrender.com/api/usuarios";


 constructor(private http: HttpClient) { }

public crear(crearUsuarioDTO: CrearUsuarioDTO): Observable<RespuestaDTO> {
 return this.http.post<RespuestaDTO>(this.usuarioURL, crearUsuarioDTO);
}


public editar(editarUsuarioDTO: EditarUsuarioDTO): Observable<RespuestaDTO> {
 return this.http.put<RespuestaDTO>(this.usuarioURL, editarUsuarioDTO);
}


public eliminar(id: string): Observable<RespuestaDTO> {
 return this.http.delete<RespuestaDTO>(`${this.usuarioURL}/${id}`);
}


public obtener(id: string): Observable<RespuestaDTO> {
 return this.http.get<RespuestaDTO>(`${this.usuarioURL}/${id}`);
}





}
