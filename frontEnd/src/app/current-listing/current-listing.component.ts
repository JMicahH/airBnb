import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-listing',
  templateUrl: './current-listing.component.html',
  styleUrls: ['./current-listing.component.css']
})
export class CurrentListingComponent implements OnInit {
  listing: any;
  listingId: any;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
    private _activeRoute: ActivatedRoute,
  ) { }
  
  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
      this.listingId = params['id'];
      this.getListing();
    })
  }

  getListing() {
    this._apiService.getListing(this.listingId)
    .then(data => {
      if (data.error){
        console.log(data.error)
      } else {
        this.listing = data.listing
      }
    });
  }
  
  delete(){
    this._apiService.deleteListing(this.listingId)
    .then(data => {
      if (data.error){
        console.log(data.error)
      } else {
        this._route.navigateByUrl('/dashboard')
      }
    });
  }
}
