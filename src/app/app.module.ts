import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//paginas
import {PrincipalPage} from '../pages/principal/principal';
import {Pagina1Page} from '../pages/pagina1/pagina1';
import {Pagina2Pa} from '../pages/pagina2/pagina2';
import {AjustesPage} from '../pages/ajustes/ajustes';
import {Ajustes2Page} from '../pages/ajustes2/ajustes2';
import {TabsPage} from '../pages/tabs/tabs';
import {ModalPage} from '../pages/modal/modal';


@NgModule({
  declarations: [
    MyApp,

    PrincipalPage,
    Pagina1Page,
    Pagina2Pa,
    AjustesPage,
    Ajustes2Page,
    TabsPage,
    ModalPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    PrincipalPage,
    Pagina1Page,
    Pagina2Pa,
    AjustesPage,
    Ajustes2Page,
    TabsPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
