import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class CreateService {
  private headers = new Headers({ 'token': localStorage.getItem('token'), 'Authorization': 'Bearer' });

  constructor(private http: Http) { }
  getCategory() {
    return this.http.get(environment.apiUrl + '/api/category').toPromise().then(res => res).catch(err => err);
  }
  createTest(data) {
    return this.http.post(environment.apiUrl + '/api/test', data, { headers: this.headers }).toPromise().then(res => res).catch(err => err);
  }
}
