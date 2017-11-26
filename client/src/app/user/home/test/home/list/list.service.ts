import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../../../environments/environment';
@Injectable()
export class ListService {

  constructor(private http: Http) { }

  getall() {
    return this.http.get(environment.apiUrl + '/api/test').toPromise().then(res => res).catch(err => err);
  }

}
