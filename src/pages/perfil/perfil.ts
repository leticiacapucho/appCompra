import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios'; 

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  usuario: IUsuario = { name:'', email:'',password:''};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _usuariosProvider: UsuariosProvider) {
  }

  // Carrega / atualiza as informações do usuário
  ionViewDidLoad() {
  //  console.log('ionViewDidLoad CadastroPage');
    let usuario = {
      "name": "Leticia",
      "email": "leticia@gmail.com",
      "password": "12345",
      "id": 1};


    this._usuariosProvider.showUsuario(usuario).subscribe(
      //tratando erro se o servidor estiver fora do ar, sem sucesso ou com sucesso.
      
      //Case se sucesso  
        sucesso =>{
            // pegar a lista e preencher a lista com o retorno recebido na response, no caso defini como variável de sucesso
          this.usuario = sucesso;
        },
        // tratando o erro 
        erro => {
          console.log("Erro: " + erro.message);
        }
    );
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

  editarUsuario() {
   
    this._usuariosProvider.editUsuario(this.usuario).subscribe(
      //tratando erro se o servidor estiver fora do ar, sem sucesso ou com sucesso.
      
      //Case se sucesso  
        sucesso =>{
            // pegar a lista e preencher a lista com o retorno recebido na response, no caso defini como variável de sucesso
          this.usuario = sucesso;
        },
        // tratando o erro 
        erro => {
          console.log("Erro: " + erro.message);
        }
    );
  }

}
