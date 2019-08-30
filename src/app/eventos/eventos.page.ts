import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  dados = [
    {nome: "git", descricao: "git hub no mercado"},
    {nome: "git2", descricao: "git hub no mercado2"},
    {nome: "git3", descricao: "git hub no mercado3"}


  ];

  constructor() { }

  ngOnInit() {
  }

}
