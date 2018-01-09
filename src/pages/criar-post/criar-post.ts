import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecionarCategoriaPage } from '../selecionar-categoria/selecionar-categoria';



@IonicPage()
@Component({
  selector: 'page-criar-post',
  templateUrl: 'criar-post.html',
})
export class CriarPostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarPostPage');
  }

  criarPost(){
    this.navCtrl.push(SelecionarCategoriaPage);
  }

}
