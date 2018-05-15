import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController} from 'ionic-angular';
 import {Pagina1Page} from '../pagina1/pagina1';
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loading:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
Entrar(){
  this.presentLoading();

}

  presentLoading() {
    let loader = this.loading.create({
      content: "Cargando el Juego..",
      duration: 1000

    });
    this.navCtrl.push(Pagina1Page);
    loader.present();
  }
}
