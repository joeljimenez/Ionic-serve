import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//servicio
import { BaseDatos } from '../Servicio/ServicioBase';
 import { PruebaService } from '../Servicio/Prueba';
 
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
import {RegistrarsePage} from '../pages/registrarse/registrarse';
import { RankingPage } from '../pages/ranking/ranking';
import { NivelPipe } from '../Pipes/Nivel';
import { CreditosPage } from '../pages/creditos/creditos';

// storage
import { IonicStorageModule } from '@ionic/storage';
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
    NivelPipe,
    ModalSessionPage,
    TocarDirective,
    RegistrarsePage,
    RankingPage,
    CreditosPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
   
    IonicStorageModule.forRoot()
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
    ModalSessionPage,
    RegistrarsePage,
    RankingPage,
    CreditosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BaseDatos,
    PruebaService,
    ModalSessionPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
