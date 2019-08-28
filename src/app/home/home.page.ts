import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: any = "";

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get("usuario").then((dados) => {
      this.usuario = dados;
      //console.log(dados);
    });
  }

}
