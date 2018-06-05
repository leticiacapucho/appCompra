
export interface IUsuario {
    // o ponto de exclamação serve pra dizer que não é obrigatório,
// ou seja, pode ou não ter.    
    id?: number;
    name?: string;
    email: string;
    password?: string;
    token?: string;
}