import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostsProvider {
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
          console.log(result);
          resolve(result);          
        }, err => {
          console.log(err);
        });
    });
  }

}
