import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
nombre:string="";
edad:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public view:ViewController) {
    this.nombre=this.navParams.get("nombre");
    this.edad=this.navParams.get("edad");
    console.log(this.nombre , this.edad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
RegresarJuego(){
  this.view.dismiss();
}
}
