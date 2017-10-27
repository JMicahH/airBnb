import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-listings',
  templateUrl: './your-listings.component.html',
  styleUrls: ['./your-listings.component.css']
})
export class YourListingsComponent implements OnInit {
  listings: any;
  currentId: any;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
  ) { } 

  ngOnInit() {
    this.getYourListings();
    console.log(this.currentId)
  }

  getYourListings(){
    this._apiService.getYourListings()
    .then(data => {
      if (data.listings){
        this.listings = data.listings;
      }
      else{
        console.log("Error in getting listings");
      }
    })
  }

  changeCurrent(id){
    this.currentId = id;
  }
}
