
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Pagina1Page} from '../pagina1/pagina1';
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina.html',
})
export class Pagina2Pa {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina1Page');
  }
Volver(){
this.navCtrl.push(Pagina1Page);

}
}
