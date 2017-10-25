import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  listingId: any;
  listing: any;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
    private _activeRoute: ActivatedRoute
  ) { 
    
  } 

  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
      this.listingId = params['id'];
    })
    this.getListing();
  }

  // Get listing id from url
  getListing() {
    this._apiService.getListing(this.listingId)
    .then(data => {
      if (data.errors){
        console.log(data.errors)
      } else {
        this.listing = data.listing
      }
    });
  }

  // bookListing(){
  //   this._apiService.bookListing(this.listingId)
  // }

}
