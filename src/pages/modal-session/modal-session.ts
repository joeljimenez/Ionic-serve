import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
import {RegistrarsePage} from '../registrarse/registrarse';
import {Login} from '../../Interfas/Login';
@Component({
  selector: 'page-modal-session',
  templateUrl: 'modal-session.html',
})
export class ModalSessionPage {
Iniciar:Login[]=[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public view:ViewController,
     public alerta:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSessionPage');
  }
Cancelar(){
  let confirma=this.alerta.create({
    title:'¿Desea Salir?',
    message:'Si sale, los Datos Ingresados, no se Guardaran.',
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

        }
      }
    ]
  });
  confirma.present();

}

Registrar(){
  this.view.dismiss();
  this.navCtrl.push(RegistrarsePage);
}

Entrar(){
  console.log(this.Iniciar);
}
}
