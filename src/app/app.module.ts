import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//firedatabase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//servicio
import { BaseDatos } from '../Servicio/ServicioBase';
//pipes
import { LlavePipe } from '../pipes/llave/llave';
//directive
import {TocarDirective} from '../directives/tocar';

import { MyApp } from './app.component';
//paginas
import {PrincipalPage} from '../pages/principal/principal';
import {Pagina1Page} from '../pages/pagina1/pagina1';
import {PagesPagina2Page} from '../pages/pages-pagina2/pages-pagina2';
import {AjustesPage} from '../pages/ajustes/ajustes';
import {Ajustes2Page} from '../pages/ajustes2/ajustes2';
import {TabsPage} from '../pages/tabs/tabs';
import {ModalPage} from '../pages/modal/modal';
import { ModalSessionPage } from '../pages/modal-session/modal-session';


export const firebaseConfig = {
  apiKey: "AIzaSyAHUkrHQjncDmjhO2ERtQlZMNGUsIb7ICU",
  authDomain: "pregu-3c8e4.firebaseapp.com",
  databaseURL: "https://pregu-3c8e4.firebaseio.com",
  projectId: "pregu-3c8e4",
  storageBucket: "pregu-3c8e4.appspot.com",
  messagingSenderId: "451422552347"
};

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    Pagina1Page,
PagesPagina2Page,
    AjustesPage,
    Ajustes2Page,
    TabsPage,
    ModalPage,
    LlavePipe,
    ModalSessionPage,
    TocarDirective


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    Pagina1Page,
PagesPagina2Page,
    AjustesPage,
    Ajustes2Page,
    TabsPage,
    ModalPage,
    ModalSessionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    BaseDatos,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
