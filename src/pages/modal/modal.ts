import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
RegresarJuego(){
  this.view.dismiss();
}
}
