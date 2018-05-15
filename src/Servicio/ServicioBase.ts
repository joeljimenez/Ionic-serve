import { Injectable } from '@angular/core';
//firedatabase
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Preguntas } from '../Interfas/Preguntas';
import { map } from 'rxjs/operators';


@Injectable()
export class BaseDatos {
  pregunta:Preguntas[]=[];
  tasksRef: AngularFireList<any>;
  joel: Observable<any[]>;
    constructor(public Datos:AngularFireDatabase ) {
     
this.tasksRef=Datos.list('ListPregunta/Preguntas/Question');
      }

      TraerPreguntas(){
        this.joel = this.tasksRef.snapshotChanges().pipe(map(changes=>
          changes.map(c=>({
            key:c.payload.key,...c.payload.val()}))
        ));

        return this.joel;
      }
     Guardar(){
      this.joel = this.Datos.list('ListPregunta/Preguntas/Question').
      valueChanges();
     this.tasksRef.push({
      Pregunta:"Que se celebra el 25 de diciembre",
      Opciones:{
        A:"Navidad",
        B:"Año nuevo",
        C:"Simbolos Patrios",
        D:"Ninguna Anteriores"
      },
      Correcta:"Navidad",
      Respondida:false,
      Terminada:false
     });
     }
     Actualizar(id:string,Te:number){
       if(Te==0){
        this.tasksRef.update(id,{
          Respondida:true,
          Terminada:false
          });
       }else{
        this.tasksRef.update(id,{
          Respondida:false,
          Terminada:true
          });
       }

     }
}
