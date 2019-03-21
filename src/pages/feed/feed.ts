import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { CriarPostPage } from '../criar-post/criar-post';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  posts: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public postsProvider: PostsProvider) 
  {
    this.getPosts();
  }

  ionViewDidLoad() {

  }

  getPosts() {
    this.postsProvider.getPost()
    .then((result: any) => {
      this.posts = result;
      console.log("log do sucesso - " + this.posts)
    })
    .catch((error: any) => {
      console.log('fodeu');
    });
  }

  //Animação de carregando ao arrastar tela para baixo, no feed, com intuito de atualizar posts
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  criarPost(){
    this.navCtrl.push(CriarPostPage);
  }

}
