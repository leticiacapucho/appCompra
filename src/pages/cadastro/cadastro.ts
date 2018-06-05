import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { IUsuario } from '../../interfaces/IUsuario';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  usuario: IUsuario = { name:'', email:'',password:''};
  ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

  addUsuario() {
    console.log(this.usuario);
  }

}
