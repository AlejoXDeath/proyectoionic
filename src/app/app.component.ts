import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/tabs/tab1', icon: 'home' },
    { title: 'Productos', url: '/tabs/tab2', icon: 'cube' },
    { title: 'Registrarse', url: '/tabs/tab3', icon: 'person-add' },
    { title: 'Iniciar Sesión', url: '/iniciar-sesion', icon: 'log-in' },
    // { title: 'Camperas', url: '/camperas', icon: 'shirt' },
    // { title: 'iniciar sesion', url: '/iniciar', icon: 'person-add' },
    // { title: 'registrarse', url: '/registrarse', icon: 'log-in' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private menuCtrl: MenuController) {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
