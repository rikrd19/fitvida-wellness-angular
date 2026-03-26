import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// IMPORTA EL NUEVO COMPONENTE AQUÍ:
import { HeroCard} from './components/hero-card/hero-card';

@Component({
  selector: 'app-root',
  standalone: true,
  // AÑÁDELO A LA LISTA DE IMPORTS:
  imports: [MatToolbarModule, MatButtonModule, HeroCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  title = 'fitvida-app';
}