import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import {FormBuilder} from '@angular/forms';

import{UsuarioService} from '../services/usuario/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  formularioCadastro;

  constructor(private navCtlr: NavController, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formularioCadastro = this.formBuilder.group({
      text: "",
      email: "",
      password: ""
    })
  }
  

  ngOnInit() {
  }

}
