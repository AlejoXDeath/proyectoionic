import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
// Método para alternar la visibilidad de los detalles
toggleDetails(detailsId: string) {
  const details = document.getElementById(detailsId);
  if (details) {
    if (details.style.display === 'none') {
      details.style.display = 'block'; // Muestra los detalles
    } else {
      details.style.display = 'none'; // Oculta los detalles
    }
  }
}
}
