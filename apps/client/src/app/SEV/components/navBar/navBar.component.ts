import { Component } from '@angular/core';  // Importar el decorador Component
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navBar',  // Corrige esto a 'navBar' si es tu selector
  templateUrl: 'navBar.component.html',
  standalone:false,
  animations: [
    trigger('menuAnimation', [
      state('open', style({ height: '*', opacity: 1 })),
      state('closed', style({ height: '0', opacity: 0 })),
      transition('open <=> closed', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class Navbar {
  open = false; // Inicializa la variable 'open'
}
