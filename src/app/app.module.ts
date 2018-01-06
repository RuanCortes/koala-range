import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { ListPage } from '../pages/list/list';
import { RangeMapComponent } from '../components/range-map/range-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    CadastroPage,
    HomePage,
    ListPage,
    FeedPage,
    RangeMapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    CadastroPage,
    HomePage,
    FeedPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geofence,
    Geolocation
  ]
})
export class AppModule {}
