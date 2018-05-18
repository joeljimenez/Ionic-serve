import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-modal-session',
  templateUrl: 'modal-session.html',
})
export class ModalSessionPage {

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
}
