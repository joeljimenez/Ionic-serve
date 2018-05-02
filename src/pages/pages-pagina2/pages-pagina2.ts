import { Component } from '@angular/core';
import {NavController, NavParams,ModalController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';
import {AjustesPage} from '../ajustes/ajustes';
@Component({
  selector: 'page-pages-pagina2',
  templateUrl: 'pages-pagina2.html',
})
export class PagesPagina2Page {
preguntas:any=[
  {
nombre:"Joel Jimenez",
edad:20,
respondida:false,
terminada:false
},
{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},
{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},
{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},
{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},
{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},
{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},
{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},
{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},{
  nombre:"Joel Jimenez",
  edad:20,
  respondida:false,
  terminada:false
},
{
nombre:"joel jimenez",
edad:20,
respondida:false,
terminada:false
},{
nombre:"joel jimenez",
edad:20,
respondida:false,
terminada:false
},{
nombre:"joel jimenez",
edad:20,
respondida:false,
terminada:false
},{
nombre:"joel jimenez",
edad:20,
respondida:false,
terminada:false
}
,
{
nombre:"joel jimenez",
edad:20,
respondida:false,
terminada:false
},{
nombre:"joel jimenez",
edad:20,
respondida:false,
terminada:false
},{
nombre:"joel jimenez",
edad:20,
respondida:false,
terminada:false
},{
nombre:"joel jimenez",
edad:20,
respondida:false,
terminada:false
}
];

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
Pendientes(i:number){
  let moda=this.modal.create(AjustesPage,{id:i});
  moda.present();

}


}
