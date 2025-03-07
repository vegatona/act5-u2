import { Component } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';
import { producto } from './producto/Producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports: [ProductoComponent, CommonModule, FormsModule],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css'
})
export class ListadoProductoComponent {
    //array y lista de los productos iniciciales
    productos: producto[] = [
      new producto('Laptop HP', 15000),
      new producto('Mouse Gamer', 500),
      new producto('Teclado Mecánico', 1200)
    ];
  
    // Variables del producto.
    nuevaDescripcion: string = '';
    nuevoPrecio: number | null = null;
    mensajeError: string = '';
     
    //Método para agregar un nuevo producto a la lista y
    //que la valida no esté vacía y que el precio sea mayor a 0.
    agregarProducto() {
      if (!this.nuevaDescripcion.trim()) {
        this.mensajeError = 'La descripción del producto es obligatoria.';
        return;
      }
      
      if (this.nuevoPrecio === null || this.nuevoPrecio <= 0) {
        this.mensajeError = 'El precio debe ser un valor positivo.';
        return;
      }
  
      // Si las validaciones pasan, se agrega el producto y se limpia el formulario
      this.productos.push(new producto(this.nuevaDescripcion, this.nuevoPrecio));
      this.nuevaDescripcion = '';
      this.nuevoPrecio = null;
      // Limpiar mensaje de error
      this.mensajeError = '';
    }
}