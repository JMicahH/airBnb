import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  city: any;
  state: any;

  results: any;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
    private _activeRoute: ActivatedRoute,
    private _titlecasePipe:TitleCasePipe,
  ) { }

  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
      this.city = params['city'];
      this.state = params['state'];
      this.search();
    })
  }

  search(){
    this._apiService.search(this.city, this.state)
    .then(data => {
      if (data.errors){
        console.log(data.errors)
      } else {
        // Route to a search page 
        this.results = data.listings
        for(var i=0; i<this.results.length; i++){
          this.results[i].city = this._titlecasePipe.transform(this.results[i].city)
        }
      }
    });
  }

}
