import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController,Platform} from 'ionic-angular';
import { PruebaService } from '../../Servicio/Prueba';
 
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
nombre:string="";
edad:number=0;
token:string;
Id_User:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public view:ViewController,public servi:PruebaService, public plataform:Platform,public storage:Storage) {
    this.nombre=this.navParams.get("nombre");
    this.edad=this.navParams.get("edad");
    console.log(this.nombre , this.edad);
   this.cargar_storage();
this.servi.Perfil(this.Id_User);



    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
RegresarJuego(){
  this.view.dismiss();
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
}
