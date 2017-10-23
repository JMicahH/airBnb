import { Injectable } from '@angular/core';

// Import these 3 always
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  // This talks to the API or the DB

  // Change function name
  exampleServiceFunction(param){
    return this._http.get(`route/${param}`)
    .map(data => data.json())
    .toPromise();
  }

  register(user){ 
    return this._http.post('/api/user/create', user)
    .map(data => data.json())
    .toPromise()
  }
}
