import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  // Definimos propiedades para recibir datos desde el componente padre.
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
}
