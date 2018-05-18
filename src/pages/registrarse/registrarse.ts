import { Component } from '@angular/core';
import {NavController, NavParams,AlertController,ViewController,ModalController } from 'ionic-angular';
import {ModalSessionPage} from '../modal-session/modal-session';
 
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
requerido:boolean=false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alerta:AlertController,
      public view:ViewController,
      public modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }
  Cancelar(){
    let confirma=this.alerta.create({
      title:'¿Desea Salir?',
      message:'Si sale, los Datos Ingresados, no se Guardaran.',
      buttons: [
        {
          text:'Aceptar',
          handler:()=>{
this.navCtrl.pop();

           }
        },
        {
          text:'Cancelar',
          handler: ()=>{

          }
        }
      ]
    });
    confirma.present();

  }

Registrar(){
  this.navCtrl.pop();
  let moda=this.modal.create(ModalSessionPage);
  moda.present();
}
}
