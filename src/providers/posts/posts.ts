import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}
