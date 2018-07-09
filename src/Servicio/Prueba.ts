import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from '../URL/URL_SERVICE';
import {Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Injectable()
export class PruebaService {
    constructor(public http:Http, public storage:Storage , public plataform:Platform){
this.cargar_storage();
this.Traer_Preguntas();
this.traer_puntaje();
this.traer_Verficador(this.Id_User);
 
    }
    Preguntas:any[]=[];
    PreguntasS:any[]=[];
    Puntajes:any[]=[];
    PerfilU:any[]=[];
    Habil:any[]=[];
    token:string;
    Id_User:string;
    Traer_Preguntas(){
        let url = URL_SERVICIOS + "Preguntas/Traer_Preguntas";
        this.http.get(url)
        .map(resp=>resp.json())
        .subscribe(data=>{

this.Preguntas.push( ...data.Linea);
console.log(this.Preguntas);
        })
    }

    Traer_Una_Pregunta(id$: number){
        console.log("servicio"+ id$);
        const url = URL_SERVICIOS + 'Preguntas/Traer_Una_Pregunta/'+id$;
        console.log(url);
        return this.http.get(url)
        .map(res=>res.json())
        .subscribe(data=>{
            this.PreguntasS=data.Mensaje[0];
            console.log(this.PreguntasS);
        });
    }

    traer_puntaje(){
        const url = URL_SERVICIOS + 'Respuestas/traer_puntaje';
        return this.http.get(url).
        map(res=>res.json()).
        subscribe(data=>{
this.Puntajes.push(...data.Linea);
console.log(this.Puntajes);
        });
      }

      Perfil(Id:string){
        console.log(Id);
        const url = URL_SERVICIOS + 'UsuarioJuego/Perfil_Usuario/'+Id;
        return this.http.get(url).
        map(res=>res.json()).
        subscribe(data=>{
            this.PerfilU=data.Linea;
            console.log(this.PerfilU);
        });
       
      }

      
traer_Verficador(Id:string){
    console.log(Id);
    const url = URL_SERVICIOS + 'Preguntas/tablero_verificar/'+Id;
    return this.http.get(url).
    map(res=>res.json()).
    subscribe(data=>{
        this.Habil.push(...data.Linea);
        console.log(this.Habil);
    });
   
  }

  ////////////////////////
  
public cargar_storage(){
    let promesa = new Promise((resolve, reject)=>{
      if(this.plataform.is("cordova")){
        //Storage Del Telefono
        this.storage.ready().then( ()=>{
           this.storage.get("token").
           then(  token=>{
              if(token){
                this.token=token;
              }
          })
  
           this.storage.get("Id_User").
           then(  Id_User=>{
            if(Id_User){
              this.Id_User=Id_User;
            }
            resolve();
         })
        })
      }
      else{
  //Storage Del la Computador
  
  if(localStorage.getItem("token")){
  this.token=localStorage.getItem("token");
  this.Id_User=localStorage.getItem("Id_User");
  }
  resolve();
  
  
      }
  
    });
    return promesa;
  }

}