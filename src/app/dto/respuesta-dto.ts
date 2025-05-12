/*export interface RespuestaDTO {
    error: boolean,
    contenido: any
 }
*/

 export interface RespuestaDTO {
  error: boolean;
  mensaje: {
    token: string;
    refreshToken: string | null;
    mensaje: string;
    error: boolean;
  };
}
 