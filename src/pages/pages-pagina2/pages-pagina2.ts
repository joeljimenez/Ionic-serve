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
nombre:"¿Qué Fecha se celebra el dia de la Bandera Nacional?",
Correcta:"4 de noviembre del 1903",
respondida:false,
terminada:false,
opciones:{
  A:"1 de enero del 1990",
  B:"4 de noviembre del 1903",
  C:"31 de julio del 1999",
  D:"3 de noviembre del 1990"
}
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
Pendientes(pregunta:any, id:number){
  let moda=this.modal.create(AjustesPage,{id:id,pregunta:pregunta});
  moda.present();

}


}
