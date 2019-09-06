import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  url: string = "http://localhost:8085/casaaberta/objetos";

  constructor(private http: HttpClient) { }

  eventos() {
    return this.http.get(this.url + "/obj_evento.php");
  }
}
