import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  standalone:true,
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
    usuarios: any[] = [];
    
    constructor(private usuariosService: UsuariosService) {}
    
    ngOnInit(): void {
    this.usuariosService.obtenerDatos().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
