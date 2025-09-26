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
  // Lista inicial de flores
  flores: Flor[] = [
    { nombre: 'Rosa', descripcion: 'Una flor elegante y romántica.', imagen: 'assets/rosa.png', temporada: 'Todo el año', precio: 120 },
    { nombre: 'Tulipán', descripcion: 'Flor colorida y vibrante.', imagen: 'assets/tulipan.png', temporada: 'Primavera', precio: 90 },
    { nombre: 'Girasol', descripcion: 'Representa la alegría y energía.', imagen: 'assets/girasol.png', temporada: 'Verano', precio: 75 }
  ];

  // Control del formulario
  mostrarFormulario = false;

  nuevaFlor: Flor = {
    nombre: '',
    descripcion: '',
    imagen: '',
    temporada: '',
    precio: 0
  };

  // Alternar visibilidad
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    if (!this.mostrarFormulario) {
      this.limpiarFormulario();
    }
  }

  // Guardar nueva flor
  guardarFlor() {
    if (this.nuevaFlor.nombre && this.nuevaFlor.descripcion && this.nuevaFlor.imagen && this.nuevaFlor.temporada && this.nuevaFlor.precio > 0) {
      this.flores.push({ ...this.nuevaFlor });
      this.limpiarFormulario();
      this.mostrarFormulario = false;
    } else {
      console.log("⚠️ Completa todos los campos antes de guardar.");
    }
  }

  // Reset formulario
  limpiarFormulario() {
    this.nuevaFlor = {
      nombre: '',
      descripcion: '',
      imagen: '',
      temporada: '',
      precio: 0
    };
  }

  // Manejar selección de archivo de imagen
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.nuevaFlor.imagen = URL.createObjectURL(file); // URL temporal para previsualizar
    }
  }
  cancelar() {
    this.limpiarFormulario();
    this.mostrarFormulario = false;
  }
}