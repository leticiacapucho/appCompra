import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser'; 

import { IAula } from '../../interfaces/IAula';

@IonicPage()
@Component({
  selector: 'page-aula',
  templateUrl: 'aula.html',
})
export class AulaPage {
  item: IAula;
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public domSanitizer: DomSanitizer) {
    
      this.item = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaPage');
  }

}