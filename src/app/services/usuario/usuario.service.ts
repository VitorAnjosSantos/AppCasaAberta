import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = "http://10.131.45.40:8081/casaaberta/objetos";

  constructor(private http: HttpClient) { }

  login(dados: any) {
    return this.http.post(this.url + "/obj_usuario.php", dados);
  }  

  cadastrar(dados: any) {
    return this.http.post(this.url + "/obj_usuario_insert.php", dados);
  }
}
