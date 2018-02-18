import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApelidoPage } from '../apelido/apelido';
import { ProfileProvider } from '../../providers/profile/profile';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  private apiUrl = 'http://localhost:8080/profile';

  user = {
    profile: {
      nickname: '',
      email: ''
    }
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public profileProvider: ProfileProvider, 
              public http: HttpClient) 
  {
    this.addUser(this.user);
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  addUser(user) {
    this.profileProvider.createUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  apelido(){
    this.navCtrl.push(ApelidoPage);
  }

}
