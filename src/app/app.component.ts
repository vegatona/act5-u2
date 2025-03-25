import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { ComponentePadreComponent } from './componentes/componente-padre/componente-padre.component';
import { ReplicadorComponent } from './replicador/replicador.component';
import { Replicador2Component } from './replicador2/replicador2.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { MensajeService } from './mensaje.service';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoUsuariosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app-angular';
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  titulo = 'Servicios con Observables en Angular';
  
  /*mensaje: string;
  
  constructor(private mensajeService: MensajeService) {
    this.mensaje = this.mensajeService.obtenerMensaje();
  }*/
}
