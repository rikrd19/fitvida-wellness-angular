import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para el *ngFor
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; // Nuevo
import { MatFormFieldModule } from '@angular/material/form-field'; // Nuevo
import { MatInputModule } from '@angular/material/input'; // Nuevo
import { HeroCard } from './components/hero-card/hero-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HeroCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  // Lista de servicios para las tarjetas
  services = [
    { title: 'Yoga', desc: 'Encuentra tu equilibrio interior.', price: '40€' },
    { title: 'Pilates', desc: 'Fortalece tu core y postura.', price: '45€' },
    { title: 'CrossFit', desc: 'Lleva tu energía al límite.', price: '50€' }
  ];
}