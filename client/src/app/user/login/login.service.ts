import { environment } from './../../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private http: Http) {}

  login(data) {
    return this.http.post(environment.apiUrl + '/api/auth/user-login', data).toPromise().then(res => res).catch(err => err);
  }

  loginFacebook(data) {
    return this.http.post(environment.apiUrl + '/api/auth/login-facebook', data).toPromise().then(res => res).catch(err => err);
  }

}
