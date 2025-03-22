import { Component, Input } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-resultado',
  standalone:true,
  imports: [FormularioComponent],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  @Input() resultadoHijo: number | null = null;
}
