import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { FormBuilder } from '@angular/forms';

import { UsuarioService } from '../services/usuario/usuario.service';

import { Storage } from '@ionic/storage';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin;

  constructor(private toastController: ToastController, private navCtrl: NavController, private formBuilder: FormBuilder, private usuarioService: UsuarioService, private storage: Storage) { 
    this.formularioLogin = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuário não encontrado!',
      duration: 10000
    });
    toast.present();
  }

  login(dadosLogin: any) {
    const formData = new FormData();
    formData.append("email", dadosLogin.email);
    formData.append("senha", dadosLogin.password);

    this.usuarioService.login(formData).subscribe((data: any) => {
      console.log(data);

      if (data.sucesso) {
        this.storage.set("usuario", data.usuario).then(() => {
          this.navCtrl.navigateRoot("/home");
        });
      } else {
        //alert("Usuário não encontrado!");
        this.presentToast();
      }
    });

    //alert("Click");
    //this.navCtrl.navigateForward("/tabs");
  }

  cadastrar() {
    this.navCtrl.navigateForward("/cadastrar-usuario");
  }   





}
