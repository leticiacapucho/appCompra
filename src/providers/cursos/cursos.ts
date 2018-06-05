import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICurso } from '../../interfaces/ICurso';


@Injectable()
export class CursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }

  // Criando requisições http
  allTeste() {
    // retornando o que tem em cursos. O http transforma para um objeto json
    return this.http.get<ICurso[]>('http://localhost:3000/cursos');
  }

  // mostrar / exibir registro
  showTeste(data: ICurso) {
    return this.http.get<ICurso>('http://localhost:3000/cursos/' +data.id);
  } 

  // adicionando um registro
  addTeste(data: ICurso){ 
    return this.http.post<ICurso>('http://localhost:3000/cursos', data);
  }

  // atualizar / editar registro
  editTeste(data: ICurso) {
    return this.http.put<ICurso>('http://localhost:3000/cursos/' +data.id,  data);
  }

  // deletar / excluir registro
  deleteTeste(data: ICurso) {
    return this.http.delete<ICurso>('http://localhost:3000/cursos/' +data.id);
  }

  all() {
    const lista: ICurso[] = [
      {
        "id": 1, 
        "titulo": "Curso de ionic", 
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
      },
      
      {
        "id": 2, 
        "titulo": "Curso de JS", 
        "descricao": "Aprenda js na prática", 
        "valor": 33.90, 
        "valor_txt": "33,90", 
        "imagem": "https://cdn-images-1.medium.com/max/2000/1*MbVgphFn5dsipV-Sb3eUpg.png",
        "aulas": []
      }
    ];
    return lista; // retornando a lista de registros acima.
  }
}
