import { AppConstants } from './../login/app.constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EquipamentService {

  getEquipaments(): Observable<Array<any>> {
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
     return this.http.get(AppConstants.API_ROOT + '/equipament/findAll',{
       headers: headers
     })
    .map(response => response.json());
  }

  constructor(private http: Http) { }
}