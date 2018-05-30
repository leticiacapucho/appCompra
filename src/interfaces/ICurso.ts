// importar o arquivo IAula, cujo foi exportado em IAula.
import { IAula } from './IAula';
// além disso, uso o export também, a fim de receber os dados de IAula 
export interface ICurso {
    // o ponto de exclamação serve pra dizer que não é obrigatório,
// ou seja, pode ou não ter.    
    id?: number;
    titulo: string;
    descricao: string;
    valor: number;
    valor_txt: string;
    imagem: string;
    aulas: IAula[];
}