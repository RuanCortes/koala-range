import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';


@IonicPage()
@Component({
  selector: 'page-selecionar-categoria',
  templateUrl: 'selecionar-categoria.html',
})
export class SelecionarCategoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecionarCategoriaPage');
  }

  feed(){
    this.navCtrl.push(FeedPage);
  }

}
