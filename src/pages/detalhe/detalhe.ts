import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulaPage } from '../aula/aula';

import { ICurso } from '../../interfaces/ICurso';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  // item do tipo ICurso
    item: ICurso;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // alert(this.navParams.get('dados'));
   this.item = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

  abreAula(item) {
    this.navCtrl.push(AulaPage, {dados:item});
  }

}
