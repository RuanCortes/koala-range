import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostsProvider {
  private apiUrl = 'https://localhost:8080/posts';

  constructor(public http: HttpClient) {
    console.log('Hello PostsProvider Provider');
  }

  getPost() {

    return new Promise(resolve => {

      let url = this.apiUrl + '/find-all';
      
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
          console.log(result);
        }, err => {
          console.log(err);
        });
    });
  }

}
