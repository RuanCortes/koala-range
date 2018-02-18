import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecionarCategoriaPage } from '../selecionar-categoria/selecionar-categoria';
import { PostsProvider } from '../../providers/posts/posts';
import { GeolocalizacaoProvider } from '../../providers/geolocalizacao/geolocalizacao';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera'



@IonicPage()
@Component({
  selector: 'page-criar-post',
  templateUrl: 'criar-post.html',
})
export class CriarPostPage {

  private apiUrl = 'http://localhost:8080/posts';

  post = {
    createDate: '20170704', 
    latitude: this.geolocalizacaoProvider.getUserPosition(),
    logitude: "23432", 
    category: {
      id: 1
    }, 
    profile: {
      id: 1
    }
  };

  imageURI:any;
  imageFileName:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public postsProvider: PostsProvider,
              public geolocalizacaoProvider: GeolocalizacaoProvider, 
              public http: HttpClient,
              private geolocation : Geolocation,
              private transfer: FileTransfer,
              private camera: Camera) 
  {
    console.log(this.post);

    this.latit = this.geolocalizacaoProvider.getUserPosition();
    console.log("lati do contrutor" + this.latit);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarPostPage');
    this.latit = this.geolocalizacaoProvider.getUserPosition();
    console.log("lati do DidLoad" + this.latit);
  }
  

  savePost(post) {
    console.log("savePost - " + JSON.stringify(this.post));
    alert("metodo savePost");
    this.postsProvider.createPost(this.post).then((result) => {
      alert("metodo savePost2");
      console.log(result);
      alert(JSON.stringify(this.post));
    }, (err) => {
      console.log(err);
    });
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
    });
  }

  uploadFile() {
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
  
    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    }, (err) => {
      console.log(err);
    });
  }

  criarPost(){
    this.navCtrl.push(SelecionarCategoriaPage);
  }

}
