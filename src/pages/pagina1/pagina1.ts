import { Component } from '@angular/core';
import { NavController, NavParams,ModalController  } from 'ionic-angular';
import {PagesPagina2Page} from '../pages-pagina2/pages-pagina2';
import { ModalSessionPage } from '../modal-session/modal-session';

@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina1Page');
  }
Seguir(){
console.log("joel");
this.navCtrl.push(PagesPagina2Page);
}

IniciarSession(){
let moda=this.modal.create(ModalSessionPage);
moda.present();
}
}
