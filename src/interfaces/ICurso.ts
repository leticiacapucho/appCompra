// importar o arquivo IAula, cujo foi exportado em IAula.
import { IAula } from './IAula';
// além disso, uso o export também, a fim de receber os dados de IAula 
export interface ICurso {
    id: number;
    titulo: string;
    descricao: string;
    valor: number;
    valor_txt: string;
    imagem: string;
    aulas: IAula[];
}