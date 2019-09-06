import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento/evento.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  /* dados = [
    { nome: "Git", descricao: "Git Hub no mercado" },
    { nome: "Git 2", descricao: "Git Hub no mercado 2" },
    { nome: "Git 3", descricao: "Git Hub no mercado 3" }
  ]; */

  dados = [];


  constructor(private eventoService: EventoService) { }


  ngOnInit() {
    this.eventoService.eventos().subscribe((dados: any) => {
      console.log(dados);
      this.dados = dados;
    });
  }

}