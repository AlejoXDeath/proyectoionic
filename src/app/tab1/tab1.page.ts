import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
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
