import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController  } from 'ionic-angular';
import {Pagina1Page} from '../pagina1/pagina1';
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  public cargar:LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
  Loading() {
      let loader = this.cargar.create({
        content: "Cargando Juego...",
        duration: 3000

      });
      loader.present();
      this.navCtrl.push(Pagina1Page);
    }
}
