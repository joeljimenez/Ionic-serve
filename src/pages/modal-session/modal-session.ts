import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

 
@Component({
  selector: 'page-modal-session',
  templateUrl: 'modal-session.html',
})
export class ModalSessionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSessionPage');
  }

}
