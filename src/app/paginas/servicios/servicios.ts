import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

        
      acordeonActivo = signal<number | null>(null);

      toggleAcordeon(index: number): void {
        this.acordeonActivo.update((current) => current === index ? null : index);
      }

    }
