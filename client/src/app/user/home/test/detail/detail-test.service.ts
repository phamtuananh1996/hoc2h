import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class DetailTestService {

  constructor(private http: Http) { }
  getTestById(id) {
    return this.http.get(environment.apiUrl + '/api/test/' + id).toPromise().then(res => res).catch(err => err);
  }
}
