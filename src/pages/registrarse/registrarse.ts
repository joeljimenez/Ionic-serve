import { Component } from '@angular/core';
import {NavController, NavParams,AlertController,ViewController,ModalController } from 'ionic-angular';
import {ModalSessionPage} from '../modal-session/modal-session';
import { Usuario } from '../../Interfas/Usuario';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { BaseDatos } from '../../Servicio/ServicioBase';
import { LoadingController } from 'ionic-angular';


 
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
requerido:boolean=false;
public Data_Usuario : Usuario = {
 Nombre:'',
 Apellido:'',
 Cedula:'',
 claveSeguridad:'',
 UsuarioS:'',
 Contra:'',
 Carrera_Uni:'',
 Annio:'',
 Edad:'',   
 Correo_Elec:'',
 error: true
};
veri:string;
forma:FormGroup;
usu:boolean;
mensa:string;

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public alerta:AlertController,
      public view:ViewController,
      public modal:ModalController,
      public servi:BaseDatos,
      public carga:LoadingController) {
        
this.forma = new FormGroup({
'Nombre' : new FormControl  ('', [Validators.required, Validators.minLength(5)]),
'Apellido' : new FormControl  ('', [Validators.required, Validators.minLength(5)]),
'Cedula' : new FormControl  ('', [Validators.required, Validators.minLength(5)]),
'claveSeguridad' : new FormControl  ('', [Validators.required, Validators.minLength(5)]),
'Usuario' : new FormControl  ('', [Validators.required, Validators.minLength(5)]),
'Contra' : new FormControl  ('', [Validators.required, Validators.minLength(5),Validators.pattern(/^[a-z0-9_-]{6,18}$/)]),
'Carrera_Uni' : new FormControl  ('', [Validators.required, Validators.minLength(5)]),
'Annio' : new FormControl  ('', [Validators.required, Validators.maxLength(1)]),
'Edad':  new FormControl ('', [Validators.required, Validators.maxLength(2)]),
'Correo_Elec':  new FormControl('', [Validators.required,Validators.pattern("[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ]),
'veri':  new FormControl('')
});
this.forma.controls['veri'].setValidators([
  Validators.required, this.noIgual.bind(this.forma)
  ]);

  }

  noIgual(control:FormControl): {[s: string]: boolean} {
    let forma: any = this;
    if( control.value !== forma.controls['Contra'].value){ 
      return{
        noiguales: true
      }
    } else {
      return null;
    }
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }
  Cancelar(){
    let confirma=this.alerta.create({
      title:'¿Desea Salir?',
      message:'Si sale, los Datos Ingresados, no se Guardaran.',
      buttons: [
        {
          text:'Aceptar',
          handler:()=>{
this.navCtrl.pop();

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
console.log(this.forma);
  this.CargarDatos();
  this.servi.InsertarJugador(this.Data_Usuario).subscribe(res=>{
    console.log(res);
     if(!res.error){
        x =1;
        this.presentLoading(x);
      }else{
        x=2;
        this.presentLoading(x);
      }
  },function(error){
    console.log(error);
  });
  setTimeout(() => {
    this.navCtrl.pop();
  let moda=this.modal.create(ModalSessionPage);
  moda.present();
  }, 3000);
 
  
}

CargarDatos(){
  this.Data_Usuario.Nombre=this.forma.get('Nombre').value;
  this.Data_Usuario.Apellido=this.forma.get('Apellido').value;
  this.Data_Usuario.Cedula=this.forma.get('Cedula').value;
  this.Data_Usuario.claveSeguridad=this.forma.get('claveSeguridad').value;
  this.Data_Usuario.UsuarioS=this.forma.get('Usuario').value;
  this.Data_Usuario.Contra=this.forma.get('Contra').value;
  this.Data_Usuario.Correo_Elec=this.forma.get('Correo_Elec').value;
  this.Data_Usuario.Carrera_Uni=this.forma.get('Carrera_Uni').value;
  this.Data_Usuario.Annio=this.forma.get('Annio').value;
  this.Data_Usuario.Edad=this.forma.get('Edad').value;
}
presentLoading(x) {
  if(x==1){
    const loader = this.carga.create({
      content: "Guardando Jugador",
      duration: 3000
    });
    loader.present();
  }else{
    const loader = this.carga.create({
      content: "El Usuario No esta disponible",
      duration: 3000
    });
    loader.present();
  }
 
}
Validar(){
  console.log(this.Data_Usuario.UsuarioS);
  this.servi.verificar(this.Data_Usuario.UsuarioS).subscribe(res=>{
    this.mensa = res.Mensaje;
    this.usu = res.Error;
    console.log(res);
  })
}

}
