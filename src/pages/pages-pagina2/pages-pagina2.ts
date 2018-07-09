import { Component } from '@angular/core';
import {NavController, NavParams,ModalController,Platform,LoadingController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import {AjustesPage} from '../ajustes/ajustes';
import { PruebaService } from '../../Servicio/Prueba';
import { BaseDatos } from '../../Servicio/ServicioBase';
import { Storage } from '@ionic/storage';
import { Pagina1Page } from '../pagina1/pagina1'; 
 


@Component({
  selector: 'page-pages-pagina2',
  templateUrl: 'pages-pagina2.html',
})
export class PagesPagina2Page {

  token:string;
  Id_User:string;
    
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modal:ModalController ,
              public servi:BaseDatos ,
               public plataform:Platform,
               public storage:Storage,
              public carga:LoadingController,public prueba:PruebaService) {
                this.cargar_storage();
            
   
    console.log(this.Id_User + this.token);
   

  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPagina2Page');
  //  this.prueba.traer_Verficador(this.Id_User);
  }
Regresar(){
  this.navCtrl.pop();

}
MostrarModal(){
  let moda=this.modal.create(ModalPage,{nombre:"joel jimenez", edad:20});
  moda.present();
 
}
Pendientes(pregunta:string, id:number){
 //servicios de contar intentos
this.servi.Intentos(this.Id_User , this.token,id).subscribe(res=>{
console.log(res);
});

 //pase de pantalla
  let moda=this.modal.create(AjustesPage,{id:pregunta,keys:id});
  moda.present();



}
Salir(){
  this.servi.CerrarSession(this.Id_User , this.token)
  .subscribe(res=>{
console.log(res);
this.Cerrando();
this.cerrar_Sesion();
if(!res.Error){
setTimeout(() => {
  this.navCtrl.push(Pagina1Page);
}, 3000);
}else{

}

  });
}

cerrar_Sesion(){
  this.token=null;
  this.Id_User=null;
  this.cargar_storage();
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

Cerrando(){
  const loader = this.carga.create({
    content: "Cerrando Sessión",
    duration: 4000
  });
  loader.present();
}


}
