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
     
      // this.lista = this.cursoProvider.all();
      //this.cursoProvider.all(); =  quer dizer que chega do meu 
      
     // Para executar o serviço. Executar o método. Executar um observador para o webservice, assim ele socilita requisição ao servidor
    
   /*   this.cursoProvider.allTeste().subscribe(
        //tratando erro se o servidor estiver fora do ar, sem sucesso ou com sucesso.
        
        //Case se sucesso  
          sucesso =>{
              // pegar a lista e preencher a lista com o retorno recebido na response, no caso defini como variável de sucesso
              this.lista = sucesso;
          },
          // tratando o erro 
          erro => {
            console.log("Erro: " + erro.message);
          }
      ); */
  }

  // Para atualizar a página / lista
  ionViewDidEnter() {
    
     // Para executar o serviço. Executar o método. Executar um observador para o webservice, assim ele socilita requisição ao servidor
    
     this.cursoProvider.allTeste().subscribe(
      //tratando erro se o servidor estiver fora do ar, sem sucesso ou com sucesso.
      
      //Case se sucesso  
        sucesso =>{
            // pegar a lista e preencher a lista com o retorno recebido na response, no caso defini como variável de sucesso
            this.lista = sucesso;
        },
        // tratando o erro 
        erro => {
          console.log("Erro: " + erro.message);
        }
    );

    // Adicionando um registro

    let data: ICurso = {
      // id sendo criado de forma automática
      //  "id": 1, 
      "titulo": "Curso de ionic Novo", 
      "descricao": "Aprenda ionic na prática", 
      "valor": 23.90, 
      "valor_txt": "23,90", 
      "imagem": "https://cdn-images-1.medium.com/max/2000/1*MbVgphFn5dsipV-Sb3eUpg.png",
      "aulas": [
        {
          "id": 1,
          "ordem": 1,
          "titulo": "introdução ao Curso",
          "tempo": "10:00",
          "video": "https://www.youtube.com/embed/9XWhNHvGhHU",
        },
        {
          "id": 2,
          "ordem": 2,
          "titulo": "Realizando a Instalação",
          "tempo": "05:00",
          "video": "https://www.youtube.com/embed/9XWhNHvGhHU",
        }
      ]
    }; 

    this.cursoProvider.addTeste(data).subscribe(
        sucesso =>{
          console.log(sucesso);
        }, erro => {
          console.log("Erro: " + erro.message);
        }
    );
  }

  abreDetalhe(item) {
   // Teste pra ver se tá funcionando: alert("ok")
   // this.navCtrl.push(DetalhePage, {dados:"ok"});
      this.navCtrl.push(DetalhePage, {dados:item});
  }
}
