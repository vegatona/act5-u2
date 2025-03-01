import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
//import { ComponentePadreComponent } from './componentes/componente-padre/componente-padre.component';
import { ReplicadorComponent } from './replicador/replicador.component';
import { Replicador2Component } from './replicador2/replicador2.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Replicador2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
}
