import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import { RequestOptions, Headers} from '@angular/http';
=======
>>>>>>> 62f93978e31981ce10de78fdff2cee39d7621ba4
import 'rxjs/add/operator/map';


@Injectable()
export class PostsProvider {
<<<<<<< HEAD

=======
>>>>>>> 62f93978e31981ce10de78fdff2cee39d7621ba4
  private apiUrl = 'http://localhost:8080/posts';

  constructor(public http: HttpClient) {
    console.log('Hello PostsProvider Provider');
  }

  getPost() {

    return new Promise(resolve => {

      let url = this.apiUrl + '/find-all';

      let headers = new HttpHeaders();
      headers = headers.set('Access-Control-Allow-Origin', '*');

      this.http.get(url, { headers: headers })
        .subscribe((result: any) => {
<<<<<<< HEAD
          resolve(result);
=======
>>>>>>> 62f93978e31981ce10de78fdff2cee39d7621ba4
          console.log(result);
          resolve(result);          
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
