import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// MODULOS PARA GOOGLE MAPS
import {GoogleMaps} from '@ionic-native/google-maps';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule  } from '@angular/fire/auth'
import { Camera} from '@ionic-native/camera/ngx'
import { AngularFireStorageModule  } from '@angular/fire/storage'
import { from } from 'rxjs';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDNxOmLGLRhpoH2dFyUUq5_XaYhWLsT4wQ",
    authDomain: "proyecto-tecnologiadeinternet.firebaseapp.com",
    databaseURL: "https://proyecto-tecnologiadeinternet.firebaseio.com",
    projectId: "proyecto-tecnologiadeinternet",
    storageBucket: "proyecto-tecnologiadeinternet.appspot.com",
    messagingSenderId: "437053136767",
    appId: "1:437053136767:web:21fad5c16a4c8d14"
  }
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireStorageModule
    
  ],
  providers: [
    StatusBar,
    AngularFireDatabase,
    SplashScreen,
    Camera,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
