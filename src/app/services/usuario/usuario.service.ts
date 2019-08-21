import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post('http://localhost:8081/casaAberta/objetos/obj_usuario.php', data);
  }

}
