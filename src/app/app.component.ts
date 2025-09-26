import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  template: `<app-menu></app-menu>`,
})
export class AppComponent {}
