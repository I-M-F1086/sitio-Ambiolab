import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  //Creamos la variable para almacanar el texto
nombreUsuario: string = '';

 enviarFormulario(evento: Event){
  evento.preventDefault();
  //Agora podemos usar el valor de la variable directamente 
  console.log('Formulario enviado por:', this.nombreUsuario)
 }
}
