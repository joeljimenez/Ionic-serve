import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PagesPagina2Page} from '../pages-pagina2/pages-pagina2';
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
Seguir(){
console.log("joel");
this.navCtrl.push(PagesPagina2Page);
}
}
