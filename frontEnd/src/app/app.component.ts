import { Component } from '@angular/core';

import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString: string;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
  ) { } 

  search(){
    this._apiService.getListing(this.searchString)
    .then(data => {
      if (data.errors){
        console.log(data.errors)
      } else {
        // Route to a search page 
        this.searchString = data.listing
      }
    });
  }
}
