import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  listing = new Listing();

  constructor(
    private _apiService: ApiService,
    private _route: Router,
  ) { } 

  ngOnInit() {
  }

  addListing() {
    this._apiService.addListing(this.listing)
    .then(data => {
      if (data.good){
        // 
        // Change route when we know where to go
        // 
        this._route.navigateByUrl('');
      }
      else{
        console.log('Error adding listing')
      }
    })
  }

}
