import { Component } from '@angular/core';
import {  NavController,
   NavParams,
   ViewController,
   AlertController } from 'ionic-angular';
import {Ajustes2Page} from '../ajustes2/ajustes2';
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {
id:any=[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
   public view:ViewController,
 public alerta:AlertController) {
     this.id=this.navParams.get("id");
     console.log(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

Cancelar(){
  this.view.dismiss();
}
Repasar(){

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

        }
      }
    ]
  });
  confirma.present();
}

Aceptar(){
  this.id.terminada=true;
    this.view.dismiss();
}
}
