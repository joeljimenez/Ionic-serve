import { Component } from '@angular/core';
import {NavController, NavParams,ModalController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';
@Component({
  selector: 'page-pages-pagina2',
  templateUrl: 'pages-pagina2.html',
})
export class PagesPagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPagina2Page');
  }
Regresar(){
  this.navCtrl.pop();

}
MostrarModal(){
  let moda=this.modal.create(ModalPage);
  moda.present();
}


}
