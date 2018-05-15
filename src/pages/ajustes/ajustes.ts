import { Component, } from '@angular/core';

import {  NavController,
   NavParams,
   ViewController,
   AlertController,LoadingController } from 'ionic-angular';
import {Ajustes2Page} from '../ajustes2/ajustes2';
import { BaseDatos } from '../../Servicio/ServicioBase';
import { Preguntas } from '../../Interfas/Preguntas';


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {
id:Preguntas[]=[];
 opciones:any=[];
 contadorS:number=30;
 intervalo:any;
numero:number=0;
boton:boolean=true ;
Verificando:boolean=true;
key:string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
   public view:ViewController,
 public alerta:AlertController,
public loading:LoadingController, public data:BaseDatos) {
 
     this.id=this.navParams.get("id");
     this.numero=this.navParams.get("keys");
     console.log(this.id);
     console.log(this.numero);

  this.intervalo=setInterval(()=>{
    if(this.contadorS===1){
      clearInterval(this.intervalo);
this.MostrarAlerta();


    }
    this.contadorS=this.contadorS-1;
      console.log(this.contadorS);
       
  },1000);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }
  MostrarAlerta(){
    let alert = this.alerta.create({
      title: 'ERROR',
      subTitle: 'Se Agoto el tiempo de respuesta, vuelva a intentarlo',
      buttons: [
        {
          text:'Aceptar',
          handler:()=>{
this.view.dismiss();
          }
          }
      ]

    });

    alert.present();
  }

Cancelar(){
  this.view.dismiss();
  
    clearInterval(this.intervalo);
}
Repasar(numero:string){
  clearInterval(this.intervalo);
  let confirma=this.alerta.create({
    title:'Desea Abandonar',
    message:' Si sale, la pregunta se colocara en tareas en proceso y sera mandando a la'+
    'documentacion para que repase un poco mas sobre la Metodología de kanban',
    buttons: [
      {
        text:'Aceptar',
        handler:()=>{
this.data.Actualizar(numero,0);
          this.view.dismiss();
          this.navCtrl.push(Ajustes2Page);
          
        }
      },
      {
        text:'Cancelar',
        handler: ()=>{
          this.intervalo=setInterval(()=>{
            if(this.contadorS!=30){
              this.contadorS=this.contadorS;
            }
            if(this.contadorS===1){
              this.view.dismiss();

            }
            this.contadorS=this.contadorS-1;
              console.log(this.contadorS);
          },1000);
        }
      }
    ]
  });
  confirma.present();
}
//Convalidar la pregunta
Aceptar(valor:string,correcta:string,numero:string){
  console.log(valor);
 
    clearInterval(this.intervalo);
    this.presentLoading(); 
setTimeout(()=>{
//alerta
  if(valor==correcta){
    this.data.Actualizar(numero,1);
    this.MostrarlertaC(0);
    clearInterval(this.intervalo);
    this.view.dismiss();
     
  
  }else{
    this.MostrarlertaC(1);
    this.data.Actualizar(numero,0);

    this.view.dismiss();
  }
  
},3000)

}



presentLoading() {
  let loader = this.loading.create({
    content: "Verificando Respuesta.",
    duration: 2000

  });
 
  loader.present();
}
 

MostrarlertaC(i:number){
if(i==0){
  let ale=this.alerta.create({
    title: 'RESPUESTA CORRECTA',
    subTitle: 'Buen Trabajo ',
    buttons: ['OK']
  });
  ale.present();
  
}else{
  let ale=this.alerta.create({
    title: 'RESPUESTA INCORRECTA',
    subTitle: 'Vuelva Intentarlo',
    buttons: ['OK']
  });
  ale.present();
}
}
}
