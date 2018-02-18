import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsProvider {

  private apiUrl = 'http://localhost:8080/posts';

  constructor(public http: HttpClient) {
    console.log('Hello PostsProvider Provider');
  }

  getPost() {

    return new Promise(resolve => {

      let url = this.apiUrl + '/find-all';
      
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
          console.log(result);
        }, err => {
          console.log(err);
        });
    });
  }

  createPost(data){
    console.log("createPost - " + JSON.stringify(data));
    let url = this.apiUrl + '/create';

    alert("metodo createPost");
    
    return new Promise((resolve, reject) =>{
      this.http.post(url, data)
        .subscribe(res => {
          resolve(res);
          alert("metodo createPost");
        }, (err) => {
          reject(err);
        });
    });
  }

}
