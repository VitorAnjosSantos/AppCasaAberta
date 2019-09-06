import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: any = "";

  constructor(private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
    this.storage.get("usuario").then((dados) => {
      this.usuario = dados;
      //console.log(dados);
    });
  }

  sair() {
    this.storage.clear();
    this.navCtrl.navigateRoot("/");
  }

  eventos() {
    this.navCtrl.navigateForward("/eventos");
  }

}
