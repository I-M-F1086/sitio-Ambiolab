import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
//aqui se agregan las importaciones del componente ajustando la ruta si lo requiere
import { Servicios } from '../servicios/servicios';
import { Nosotros } from '../nosotros/nosotros';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-inicio',
  standalone:true,
  imports: [RouterLink, Servicios, Nosotros, Contacto, RouterLinkActive],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
