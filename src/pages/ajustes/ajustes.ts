import { Component} from '@angular/core';
import { Storage } from '@ionic/storage';
import {  NavController, NavParams, ViewController, AlertController,LoadingController,Platform } from 'ionic-angular';
import {Ajustes2Page} from '../ajustes2/ajustes2';
import { Preguntas } from '../../Interfas/Preguntas';
import { BaseDatos } from '../../Servicio/ServicioBase';
import { Juego } from '../../Interfas/Juego';
import { PruebaService } from '../../Servicio/Prueba';


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {
 id:Preguntas[]=[];

public data:Juego= {
  Respondida:'',
  Terminado:'',
  Habilitado:''
}

token:string;
Id_User:string;

 contadorS:number=20;
 intervalo:any;
numero:number=0;
boton:boolean=true ;
Verificando:boolean=true;
key:string;
opciones:any[]=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
   public view:ViewController, 
   public alerta:AlertController,
   public plataform:Platform,
   public storage:Storage,
   public loading:LoadingController,
    public servi:BaseDatos,public prueba:PruebaService) {
 
   
     this.numero=this.navParams.get("keys");
     prueba.Traer_Una_Pregunta(this.numero);
 
   
     console.log(this.numero);

      this.intervalo=setInterval(()=>{
      if(this.contadorS===1){
      clearInterval(this.intervalo);
      this.MostrarAlerta();


    }
    this.contadorS=this.contadorS-1;
      console.log(this.contadorS);

  },1000);
this.cargar_storage();
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
  this.CancelarP();
  

    clearInterval(this.intervalo);
}
Repasar(numero){
  clearInterval(this.intervalo);
  let confirma=this.alerta.create({
    title:'Desea Abandonar',
    message:' Si sale, la pregunta se colocara en tareas en proceso y sera mandando a la'+
    'documentacion para que repase un poco mas sobre la Metodología de kanban',
    buttons: [
      {
        text:'Aceptar',
        handler:()=>{
          this.data.Habilitado=true;
          this.data.Respondida=true;
          this.data.Terminado=false;
        
          this.servi.Respuestas(this.Id_User,this.token,this.numero,this.data).subscribe(res=>{
            console.log(res);
          });
          this.view.dismiss();
          this.navCtrl.push(Ajustes2Page);
    

        }
      },
      {
        text:'Cancelar',
        handler: ()=>{
          this.intervalo=setInterval(()=>{
            if(this.contadorS!=20){
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
Aceptar(valor:string,correcta:string){
  console.log(valor);

    clearInterval(this.intervalo);
    this.presentLoading();
setTimeout(()=>{
//alerta
  if(valor==correcta){

  this.data.Habilitado=true;
  this.data.Respondida=false;
  this.data.Terminado=true;
this.servi.Respuestas(this.Id_User,this.token,this.numero,this.data).subscribe(res=>{
  console.log(res);
});

this.servi.Actualizar_Puntaje(this.Id_User,this.token,this.numero).subscribe(res=>{

  console.log(res);
  
});
    this.MostrarlertaC(0);
    clearInterval(this.intervalo);
 
    this.view.dismiss();


  }else{
 this.data.Habilitado=true;
  this.data.Respondida=true;
  this.data.Terminado=false;

  this.servi.Respuestas(this.Id_User,this.token,this.numero,this.data).subscribe(res=>{
    console.log(res);
  });
    this.MostrarlertaC(1);
 
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

//para cargar el id y el token
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

CancelarP(){
  let confirma=this.alerta.create({
    title:'Desea Abandonar',
    message:'Se le Sumara Un Intento',
    buttons: [
      {
        text:'Aceptar',
        handler:()=>{
          this.view.dismiss();
         
          

        }
      },
      {
        text:'Cancelar',
        handler: ()=>{
          this.intervalo=setInterval(()=>{
            if(this.contadorS!=20){
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
}
