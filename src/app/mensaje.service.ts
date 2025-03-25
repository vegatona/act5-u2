import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensaje: string = 'Mensaje desde el servidor!';

  obtenerMensaje(): string{
    return this.mensaje;
  }
}
