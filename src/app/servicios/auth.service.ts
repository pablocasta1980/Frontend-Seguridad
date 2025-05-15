import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaDTO } from '../dto/respuesta-dto';
import { LoginDTO } from '../dto/login-dto';


@Injectable({
 providedIn: 'root'
})
export class AuthService {


 private authURL = "http://localhost:8081/api/auth";
 //private authURL = "https://alertasuq-backend.onrender.com/api/auth/login";



 constructor(private http: HttpClient) { }

 public iniciarSesion(loginDTO: LoginDTO): Observable<RespuestaDTO> {
  return this.http.post<RespuestaDTO>(`${this.authURL}/login`, loginDTO);
 }

 
}

