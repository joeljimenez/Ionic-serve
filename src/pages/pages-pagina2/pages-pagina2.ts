import { Component } from '@angular/core';
import {NavController, NavParams,ModalController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';
@Component({
  selector: 'page-pages-pagina2',
  templateUrl: 'pages-pagina2.html',
})
export class PagesPagina2Page {
preguntas:any=[
  {
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
},
{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
}
,
{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
},{
nombre:"Joel Jimenez",
edad:20
}
];
terminado:boolean=false;
Enproceso:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPagina2Page');
  }
Regresar(){
  this.navCtrl.pop();

}
MostrarModal(){
  let moda=this.modal.create(ModalPage,{nombre:"joel jimenez", edad:20});
  moda.present();
}


}
