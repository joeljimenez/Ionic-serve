
import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,AlertController } from 'ionic-angular';
import {RegistrarsePage} from '../registrarse/registrarse';
import { BaseDatos } from '../../Servicio/ServicioBase';
import { Login } from '../../Interfas/Login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoadingController,Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
        import { Pagina1Page } from '../pagina1/pagina1';
             

@Component({
  selector: 'page-modal-session',
  templateUrl: 'modal-session.html',
})
export class ModalSessionPage {
public Iniciar: Login = {
  Usuario: '',
  Contra: '',
  Error:true,
  Mensaje:'',
  Id_Jugador:'',
  token:''
}
Id_User:string;
token:string;
forma:FormGroup;
  constructor(private navCtrl: NavController,
              public navParams: NavParams,
              private view:ViewController,
              private alerta:AlertController,
              private servi:BaseDatos,
              private fb: FormBuilder, 
              private carga:LoadingController, 
              private plataform:Platform,
               private storage:Storage) {

      this.forma = this.fb.group({
     Usuario:['', [Validators.required]],
     Contra: [ '' , [Validators.required]]
});
this.cargar_storage();
console.log(this.Id_User,this.token);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSessionPage');
  }
Cancelar(){
  let confirma=this.alerta.create({
    title:'¿Desea Salir?',
    message:'Si sale, los Datos Ingresados, no se Guardaran.',
    buttons: [
      {
        text:'Aceptar',
        handler:()=>{

          this.view.dismiss();
         }
      },
      {
        text:'Cancelar',
        handler: ()=>{

        }
      }
    ]
  });
  confirma.present();

}

Registrar(){
  let x=0;
this.CargarDatos();
this.servi.Login( this.Iniciar).subscribe(res=>{

this.Autenticando();
if(!res.Error){
  x =1;
  console.log(res.token);
  console.log(res.Id_Jugador);
  this.guardar_storage(res.Id_Jugador,res.token);
  this.presentLoading(x);
  setTimeout(() => {
    this.view.dismiss();
    this.navCtrl.push(Pagina1Page);
  }, 3000);
}else{
  x=2;
  this.presentLoading(x);
}
});


}

Entrar(){
  this.view.dismiss();
  this.navCtrl.push(RegistrarsePage);
}

CargarDatos(){
  this.Iniciar.Usuario=this.forma.get('Usuario').value;
  this.Iniciar.Contra=this.forma.get('Contra').value;
}

presentLoading(x) {
  if(x==1){
    const loader = this.carga.create({
      content: "Usuario y contraseña Correctas",
      duration: 3000
    });
    loader.present();
   
  }else{
    const loader = this.carga.create({
      content: "Usuario o Contraseña Incorrectas",
      duration: 3000
    });
    loader.present();
  }
 
}

Autenticando(){
  const loader = this.carga.create({
    content: "Autenticando Usuario",
    duration: 4000
  });
  loader.present();
}
//guardarlos en el localstorage
public guardar_storage( Id_User:string,token:string){
  if(this.plataform.is('cordova')){
    console.log("en el dispositivo");
    //guardar e el disositivo
    this.storage.set('token',token);
    this.storage.set('Id_User',Id_User);
  
   
  }else{
    if(token){//verificamos si el token existe
      localStorage.setItem('token',token);
      localStorage.setItem('Id_User',Id_User);
    }else{
      localStorage.removeItem("token");
      localStorage.removeItem("Id_User");
    }
    console.log("en la pc");
  }
  }
 
  //cargarlos a las variables locales
  public cargar_storage(){
    let promesa = new Promise((resolve, reject)=>{
      if(this.plataform.is("cordova")){
        //Storage Del Telefono
        this.storage.ready().then( ()=>{
           this.storage.get("token").
           then(  token=>{
              if(token){
                this.token=token;
              }
          })

           this.storage.get("Id_User").
           then(  Id_User=>{
            if(Id_User){
              this.Id_User=Id_User;
            }
            resolve();
         })
        })
      }
      else{
//Storage Del la Computador

if(localStorage.getItem("token")){
this.token=localStorage.getItem("token");
this.Id_User=localStorage.getItem("Id_User");
}
resolve();
 

      }

    });
    return promesa;
  }



}


