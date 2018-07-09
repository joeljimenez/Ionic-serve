import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 import { PruebaService } from '../../Servicio/Prueba';
 import { Pagina1Page } from '../pagina1/pagina1';
 
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public servi:PruebaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  Atras(){
    this.navCtrl.push(Pagina1Page);
  }

}
