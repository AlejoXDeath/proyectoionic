import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private alertController: AlertController,
    private router: Router // Inyectar el Router
  ) { }

  ngOnInit() {}

  // Método de registro
  register() {
    // Verifica si todos los campos están completos
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      this.showAlert('Por favor, completa todos los campos.');
      return;
    }

    // Verifica si las contraseñas coinciden
    if (this.password !== this.confirmPassword) {
      this.showAlert('Las contraseñas no coinciden.');
      return;
    }

    // Lógica de registro (esto puede incluir la llamada a un servicio de API para registrar al usuario)
    // En este ejemplo, supongamos que el registro es exitoso.
    
    // Si el registro es exitoso
    this.showAlert('Te has registrado exitosamente.', 'Éxito');
    this.router.navigate(['/tabs/tab1']);
  }

  // Método para mostrar alertas
  async showAlert(message: string, header: string = 'Error') {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
