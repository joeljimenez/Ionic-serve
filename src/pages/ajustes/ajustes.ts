import { Component, } from '@angular/core';

import {  NavController,
   NavParams,
   ViewController,
   AlertController,LoadingController } from 'ionic-angular';
import {Ajustes2Page} from '../ajustes2/ajustes2';
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {
id:any=[];
 opciones:any=[];
 contadorS:number=30;
 intervalo:any;
numero:number=0;
boton:boolean=true ;
Verificando:boolean=true;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
   public view:ViewController,
 public alerta:AlertController,
public loading:LoadingController) {
     this.id=this.navParams.get("pregunta");
     this.numero=this.navParams.get("id");
     this.opciones=this.navParams.get("Opciones");
     console.log(this.id, this.numero,this.opciones);

  this.intervalo=setInterval(()=>{
    if(this.contadorS===1){
      clearInterval(this.intervalo);
this.MostrarAlerta();


    }
    this.contadorS=this.contadorS-1;
      console.log(this.contadorS);
        this.id.respondida=true;
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
  this.id.respondida=false;
    clearInterval(this.intervalo);
}
Repasar(){
  clearInterval(this.intervalo);
  let confirma=this.alerta.create({
    title:'Desea Abandonar',
    message:' Si sale, la pregunta se colocara en tareas en proceso y sera mandando a la'+
    'documentacion para que repase un poco mas sobre la Metodología de kanban',
    buttons: [
      {
        text:'Aceptar',
        handler:()=>{

          this.view.dismiss();
          this.navCtrl.push(Ajustes2Page);
          this.id.respondida=true;
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

Aceptar(valor:string,correcta:string){
  console.log(valor);
 
    clearInterval(this.intervalo);
    this.presentLoading(); 
setTimeout(()=>{
//alerta
  if(valor==correcta){
    this.Correcto(0);
   
  this.id.terminada=true;
  
  this.view.dismiss();
  }else{
    this.Correcto(1);
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


  
},3000)

}



presentLoading() {
  let loader = this.loading.create({
    content: "Verificando Respuesta.",
    duration: 2000

  });
 
  loader.present();
}

Correcto(id:number) {
  if(id==0){
    let loader = this.loading.create({
      content: "Respuesta Correcta.",
      duration: 1000
  
    });
    loader.present();
  }else{
    let loader = this.loading.create({
      content: "Respuesta Incorrecta.",
      duration: 1000
  
    });
    loader.present();
  }
  
}
}
