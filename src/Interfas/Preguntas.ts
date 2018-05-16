export interface Preguntas {
correcta:string;
Opciones:{
    A:string,
    B:string,
    C:string,
    D:string
}
Pregunta:string;
Respondida:boolean;
Terminada:boolean;
$key?:string;
}