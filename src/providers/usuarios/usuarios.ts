import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../interfaces/IUsuario';

import { Storage } from '@ionic/storage';

@Injectable()
export class UsuariosProvider {

  url: string = 'http://localhost:3000/';
  headers: any;

  constructor(
    public http: HttpClient,
    private storage: Storage) {
    console.log('Hello UsuariosProvider Provider');
  //  this.headers = { "headers": { "authorization": "Bearer " } };
     
  // é usado o this pra recuperar o nome que salvei     
      this.storage.set('nome', 'Letícia');
      this.storage.get('nome').then((valor) => {
        if(valor){
          console.log('Nome: ', valor);

        } else {
          console.log('Não existe: ', valor);
        }
      });

  }

  // esse método vai receber a chave e o valor
  setStorage(chave, valor){
    this.storage.set(chave, valor);
  }

  getStorage(chave){
    return this.storage.get('nome');
  }
  showUsuario(data: IUsuario) {
    return this.http.get<IUsuario>(this.url + 'usuarios/' + data.id);
  }

  loginUsuario(data: IUsuario) {
    return this.http.get<IUsuario>(this.url + 'usuarios/1');
  }

  // adicionando um registro
  addUsuario(data: IUsuario) {
    return this.http.post<IUsuario>(this.url + 'usuarios', data);
  }

  // editando um registro
  editUsuario(data: IUsuario) {
    return this.http.put<IUsuario>(this.url + 'usuarios/' + data.id, data);
  }
}
