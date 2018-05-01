import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
  // import {Pagina2Pa} from '../Pagina2/pagina2';
@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina1Page');
  }
Jugar(){
console.log("joel");
  // this.navCtrl.push(Pagina2Pa);
}
}
