import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileProvider {

  private apiUrl = 'http://localhost:8080/profile';

  constructor(public http: HttpClient) {
    console.log('Hello ProfileProvider Provider');
  }

  createUser(data){

    let url = this.apiUrl + '/create';

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return new Promise((resolve, reject) =>{
      this.http.post(url, data, httpOptions)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
