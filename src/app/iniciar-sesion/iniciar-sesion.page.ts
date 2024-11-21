import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage  {
  email: string = '';
  password: string= '';

  constructor(
    private alertController: AlertController,
    private router: Router // Inyectamos el Router para navegación
  ) {}

  ngOnInit() {}

  // Método para iniciar sesión
  login() {
    // Verificar que los campos no estén vacíos
    if (!this.email || !this.password) {
      this.showAlert('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes agregar la lógica para validar las credenciales, por ejemplo:
    // Llamada a un servicio de autenticación, validación con API, etc.
    // Vamos a suponer que las credenciales son correctas (esto debe ser reemplazado por lógica real).

    // Para este ejemplo, asumimos que el inicio de sesión es exitoso
    if (this.email === 'mateogazzola@gmail.com' && this.password === 'mateo') {
      this.showAlert('Iniciaste sesión exitosamente.', 'Éxito').then(() => {
        // Redirigir al usuario a la página de inicio después de un login exitoso
        this.router.navigate(['/tabs/tab1']);
      });
    } else {
      this.showAlert('Correo o contraseña incorrectos.');
    }
  }

  // Método para mostrar alertas
  async showAlert(message: string, header: string = 'Error') {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
    return alert.onDidDismiss(); // Esperamos a que la alerta se cierre antes de proceder
  }
}

