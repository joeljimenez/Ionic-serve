import { Component } from '@angular/core';
import { NavController, NavParams,ModalController  } from 'ionic-angular';
import {PagesPagina2Page} from '../pages-pagina2/pages-pagina2';
import { ModalSessionPage } from '../modal-session/modal-session';
 import { CreditosPage } from '../../pages/creditos/creditos';
 import { PruebaService } from '../../Servicio/Prueba';
 
import { Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BaseDatos } from '../../Servicio/ServicioBase';
import { Detalle } from '../../Interfas/Detalle';
import { RankingPage } from '../ranking/ranking';
import { Ajustes2Page } from '../ajustes2/ajustes2';

@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {
  hora = new Date().getHours();
  minuto = new Date().getMinutes();

     token:string;
     Id_User:string;
     ERROR:Boolean;
     public data:Detalle={
      Fecha_partida :new Date(),
      Duracion_Partida: this.hora +":"+this.minuto,
      Puntacion:0,
      Nivel:0,
      Id_FK_User:'',
      Id_Detalle:''
    }

    
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public modal:ModalController,
     private plataform:Platform,
     private storage:Storage,
    public servi:BaseDatos,
     public prueba:PruebaService) {
this.cargar_storage();
      console.log("El token es :",this.token);
      console.log("El Id es :",this.Id_User);
//habilitando boton
servi.BotonHabilitado(this.Id_User,this.token).subscribe(res=>{
  console.log(res)
  this.ERROR=res.Error;
});


 this.data.Id_FK_User=this.Id_User;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina1Page');
  }
Seguir(){
//servicio
this.servi.DetalleUsuario(this.Id_User,this.token,this.data).subscribe(res=>{
  console.log(res);
});


console.log("joel");
this.navCtrl.push(PagesPagina2Page);
}

IniciarSession(){
let moda=this.modal.create(ModalSessionPage);
moda.present();

}
Documentacion(){
  this.navCtrl.push(Ajustes2Page);
}

ranking(){
  this.navCtrl.push(RankingPage);
}

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

Creditos(){
  this.navCtrl.push(CreditosPage);
}
}
