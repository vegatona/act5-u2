import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { ComponentePadreComponent } from './componentes/componente-padre/componente-padre.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ComponentePadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
}
