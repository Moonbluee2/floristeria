import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { Flor } from '../../interfaces/flor.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, TarjetaComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  flores: Flor[] = [
    { nombre: 'Rosa', descripcion: 'Una flor elegante y romántica.', imagen: 'assets/rosa.png', temporada: 'Todo el año', precio: 120 },
    { nombre: 'Tulipán', descripcion: 'Flor colorida y vibrante.', imagen: 'assets/tulipan.png', temporada: 'Primavera', precio: 90 },
    { nombre: 'Girasol', descripcion: 'Representa la alegría y energía.', imagen: 'assets/girasol.png', temporada: 'Verano', precio: 75 }
  ];

  mostrarFormulario: boolean = false;

  nuevaFlor: Flor = {
    nombre: '',
    descripcion: '',
    imagen: '',
    temporada: '',
    precio: 0
  };

  agregarFlor() {
    this.mostrarFormulario = true;
  }

  guardarFlor() {
    if (!this.nuevaFlor.nombre || !this.nuevaFlor.descripcion || !this.nuevaFlor.imagen || !this.nuevaFlor.temporada || !this.nuevaFlor.precio) {
      console.log("⚠️ Todos los campos son obligatorios.");
      return;
    }
    this.flores.push({ ...this.nuevaFlor });
    console.log("✅ Flor agregada:", this.nuevaFlor);
    this.nuevaFlor = { nombre: '', descripcion: '', imagen: '', temporada: '', precio: 0 };
    this.mostrarFormulario = false;
  }

  cancelar() {
    this.nuevaFlor = { nombre: '', descripcion: '', imagen: '', temporada: '', precio: 0 };
    this.mostrarFormulario = false;
  }
}
