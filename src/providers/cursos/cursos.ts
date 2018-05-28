import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICurso } from '../../interfaces/ICurso';


@Injectable()
export class CursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }
  all(){
    const lista: ICurso[] = [
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
    return lista; // retornando a lista de registros acima.
  }
}
