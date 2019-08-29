import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: any = "";

  constructor(private storage: Storage,private navctrl: NavController) { }

  ngOnInit() {
    this.storage.get("usuario").then((dados) => {
      this.usuario = dados;
      //console.log(dados);
    });

  }

  sair(){
    this.storage.clear();
    this.navctrl.navigateRoot("/");
  }
}
