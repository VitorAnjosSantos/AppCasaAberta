import { Component,  } from '@angular/core';
import { NavController } from '@ionic/angular';

import {FormBuilder} from '@angular/forms';

import{UsuarioService} from '../services/usuario/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage{

  formularioCadastrar: any;

  constructor(private navCtlr: NavController, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formularioCadastrar = this.formBuilder.group({
      email: "",
      senha: "",
      nome: ""
    })

  }
  cadastrar(dadosCadastro: any){
    const formData = new FormData();
    formData.append('email', dadosCadastro.email);
    formData.append('senha', dadosCadastro.senha);
    formData.append('nome', dadosCadastro.nome);



    this.usuarioService.cadastrar(formData).subscribe((dados: any) => {
      console.log(dados);

      if (dados.sucesso){
        this.navCtlr.navigateForward("/");
      }
      else{
        alert("Erro ao Cadastar o Usuário");
      }

    });

  }

}
