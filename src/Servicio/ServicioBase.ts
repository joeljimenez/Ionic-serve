import { Injectable } from '@angular/core';
//firedatabase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Preguntas } from '../Interfas/Preguntas';


@Injectable()
export class BaseDatos {
  pregunta:Preguntas[]=[];
 
  joel: Observable<any[]>;
  jimenez: Observable<any[]>;
    constructor(public Datos:AngularFireDatabase ) {
     

      }

      TraerPreguntas(){
        this.joel = this.Datos.list('ListPregunta/Preguntas/Preguntas').
        valueChanges();

        return this.joel;
      }
     TraerOpciones(){
        this.jimenez = this.Datos.list('ListPregunta/Preguntas/Preguntas/Opciones').valueChanges();
        return this.jimenez;
      } 
}
