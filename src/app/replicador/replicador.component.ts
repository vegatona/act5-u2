import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  standalone: true,
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  //es para añadir un texto
  texto:string = '';

  actualizarTexto(event: Event): void{
    //le cambiel el tipo de valor
    const elemetoinput = event.target as HTMLInputElement;
    //hace refernecia a texto, y asigna el valor de
    this.texto = elemetoinput.value;
  }

}
