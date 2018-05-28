import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhePage } from '../detalhe/detalhe';

import { ICurso } from '../../interfaces/ICurso';

import { CursosProvider } from '../../providers/cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
  
// define lista do tipo ICurso, onde pega a lista de aulas do curso.
  lista: ICurso[];

  /*  lista: ICurso[] = [
      {
        id: 1, 
        titulo: "Curso de ionic", 
        descricao:"Aprenda ionic na prática", 
        valor:23.90, 
        valor_txt:"23,90", 
        imagem:"https://cdn-images-1.medium.com/max/2000/1*MbVgphFn5dsipV-Sb3eUpg.png",
        aulas: [
          {
            id: 1,
            ordem: 1,
            titulo: "introdução ao Curso",
            tempo: "10:00",
            video: "https://www.youtube.com/embed/9XWhNHvGhHU",
          },
          {
            id: 2,
            ordem: 2,
            titulo: "Realizando a Instalação",
            tempo: "05:00",
            video: "https://www.youtube.com/embed/9XWhNHvGhHU",
          }
        ]
      },
      
      {
        id: 2, 
        titulo: "Curso de JS", 
        descricao:"Aprenda js na prática", 
        valor:33.90, 
        valor_txt:"33,90", 
        imagem:"https://cdn-images-1.medium.com/max/2000/1*MbVgphFn5dsipV-Sb3eUpg.png",
        aulas: []
      }
    ];
    
    */
  constructor(
    public navCtrl: NavController, 
    public cursoProvider: CursosProvider) {
      this.lista = this.cursoProvider.all();
      //this.cursoProvider.all(); =  quer dizer que chega do meu serviço provider
  }

  abreDetalhe(item) {
   // Teste pra ver se tá funcionando: alert("ok")
   // this.navCtrl.push(DetalhePage, {dados:"ok"});
      this.navCtrl.push(DetalhePage, {dados:item});
  }
}
