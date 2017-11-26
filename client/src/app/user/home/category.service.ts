import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from './../../../environments/environment';

import {Category} from './category';

@Injectable()
export class CategoryService {

  constructor(private http:Http) { }

  getCategories(){
    return this.http.get(environment.apiUrl + '/api/category').toPromise().then(res => res).catch(err => err);
  }

}
