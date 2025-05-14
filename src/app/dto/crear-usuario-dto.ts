export interface CrearUsuarioDTO {
  nombre: string;
  telefono: string;
  ciudad: string;      // 👈 Usa string para enviar el nombre del enum (ej: "ARMENIA")
  direccion: string;
  email: string;
  password: string;
  reputacion: number;  // 👈 Puedes poner 0 por defecto
}