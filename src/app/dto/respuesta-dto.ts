/*export interface RespuestaDTO {
    error: boolean,
    mensaje: any
 }*/


export interface RespuestaDTO {
  error: boolean;
  mensaje: {
    token: string;
    refreshToken: string | null;
    mensaje: string;
    error: boolean;
  };
}
 