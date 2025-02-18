import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [RouterOutlet,TarjetaProductoComponent],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {
  nombre = 'Laptop Gamer';
  precio = 25000;
  descripcion = 'Una laptop potente para gaming y desarrollo.';
}
