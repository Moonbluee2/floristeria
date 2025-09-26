import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flor } from '../../interfaces/flor.interface';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() flor!: Flor;
  mostrarDetalles = false;

  toggleDetalles() {
    this.mostrarDetalles = !this.mostrarDetalles;
  }
}
