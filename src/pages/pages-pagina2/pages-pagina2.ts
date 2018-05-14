import { Component } from '@angular/core';
import {NavController, NavParams,ModalController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';
import {AjustesPage} from '../ajustes/ajustes';
//firedatabase
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-pages-pagina2',
  templateUrl: 'pages-pagina2.html',
})
export class PagesPagina2Page {
  joel: Observable<any[]>;
  jimenez: Observable<any[]>;
  
  Preguntas:any[]=[];
  Opciones:any[]=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public modal:ModalController,
       Datos:AngularFireDatabase) {
        this.joel = Datos.list('ListPregunta/Preguntas/Preguntas').valueChanges();
        this.jimenez = Datos.list('ListPregunta/Preguntas/Preguntas/1/Opciones').valueChanges();
       this.joel.subscribe(data=>{
console.log(data);
this.Preguntas=data;
console.log(this.Preguntas);

       });
       this.jimenez.subscribe(data=>{
console.log(data);
this.Opciones=data;
console.log(this.Opciones);
       });
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
Pendientes(pregunta:any, id:number,OP:string){
  let moda=this.modal.create(AjustesPage,{id:id,pregunta:pregunta,Opciones:OP});
  moda.present();

}


}
