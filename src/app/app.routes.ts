import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Nosotros } from './paginas/nosotros/nosotros';
import { Contacto} from './paginas/contacto/contacto';

export const routes: Routes = [
  //SI LA URL ESTA VACIA,REDIRIGE AUTOMATICAMENTE A LA PAGINA DE INICIO
  { path: '',redirectTo: 'inicio', pathMatch: 'full'},

//AQUI SE AGREGAN LAS RUTAS DE NUESTRA PAGINA 

  { path: 'inicio', component: Inicio},
  { path: 'nosotros', component: Nosotros},
  { path: 'contacto', component: Contacto},

//Ruta comodin, si el usuario escribe una ruta que no existe muestra(error 404)
{ path: '**', redirectTo: 'inicio', pathMatch: 'full'}



];

