import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  usuario: IUsuario = { name:'', email:'',password:''};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _usuariosProvider: UsuariosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

  addUsuario() {
   
    this._usuariosProvider.addUsuario(this.usuario).subscribe(
      //tratando erro se o servidor estiver fora do ar, sem sucesso ou com sucesso.
      
      //Case se sucesso  
        sucesso =>{
            // pegar a lista e preencher a lista com o retorno recebido na response, no caso defini como variável de sucesso
            console.log(sucesso);
        },
        // tratando o erro 
        erro => {
          console.log("Erro: " + erro.message);
        }
    );
  }

}
