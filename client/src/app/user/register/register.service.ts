import { environment } from './../../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

  constructor(private http: Http) {}

  register(data) {
    return this.http.post(environment.apiUrl + '/api/auth/user-register', data).toPromise().then(res => res).catch(err => err);
  }

}
