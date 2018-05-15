import { Component } from '@angular/core';
import {NavController, NavParams,ModalController } from 'ionic-angular';
 
import {AjustesPage} from '../ajustes/ajustes';
import { BaseDatos } from '../../Servicio/ServicioBase';
import { Preguntas } from '../../Interfas/Preguntas';



@Component({
  selector: 'page-pages-pagina2',
  templateUrl: 'pages-pagina2.html',
})
export class PagesPagina2Page {
  

  Preguntas:Preguntas[]=[];
    

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public modal:ModalController,
      public servi:BaseDatos ) {

 this.servi.TraerPreguntas().subscribe(data=>{
   this.Preguntas=data;
 console.log(this.Preguntas);
 });
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPagina2Page');
  }
Regresar(){
  this.navCtrl.pop();

}
MostrarModal(){
 // let moda=this.modal.create(ModalPage,{nombre:"joel jimenez", edad:20});
 // moda.present();
 this.servi.Guardar();
}
Pendientes(pregunta:string, id:number){
 
  let moda=this.modal.create(AjustesPage,{id:pregunta,keys:id});
  moda.present();

}


}
