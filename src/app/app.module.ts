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
import { SelecionarCategoriaPage } from '../pages/selecionar-categoria/selecionar-categoria';
import { CriarPostPage } from '../pages/criar-post/criar-post';
import { ApelidoPage } from '../pages/apelido/apelido';

import { RangeMapComponent } from '../components/range-map/range-map';

import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';
import { PostsProvider } from '../providers/posts/posts';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    CadastroPage,
    HomePage,
    ListPage,
    FeedPage,
    SelecionarCategoriaPage,
    CriarPostPage,
    ApelidoPage,
    RangeMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    ListPage,
    SelecionarCategoriaPage,
    CriarPostPage,
    ApelidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geofence,
    Geolocation,
    PostsProvider
  ]
})
export class AppModule {}
