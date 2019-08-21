import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

import {FormBuilder} from '@angular/forms';

import{UsuarioService} from '../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin;

  constructor(private navCtlr: NavController, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formularioLogin = this.formBuilder.group({
      email: "",
      password: ""
    })

  }
  login(dadosLogin: any){
    const formData = new FormData();
    formData.append('email', dadosLogin.email);
    formData.append('senha', dadosLogin.password);


    this.usuarioService.login(formData).subscribe((data: any) => {
      console.log(data);

      if (data.sucesso){
        this.navCtlr.navigateForward("/home");
      }
      else{
        alert("Usuário Não Encontrado");
      }

    });

    //alert("click");
    //this.navCtlr.navigateForward("tabs");

  }

    cadastrar(){
      this.navCtlr.navigateForward("/cadastrar-usuario");
    }



}
