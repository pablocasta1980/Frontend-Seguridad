export interface EditarUsuarioDTO {
  nombre: string;
  ciudad: string;       // Debe coincidir con el enum `Ciudad` del backend (ej: "ARMENIA")
  direccion: string;
  telefono: string;
}