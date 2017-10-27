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
  dateString: any;

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

reservationSubmit(){
  var startEnd = this.dateString.split("-")
  var start = startEnd[0]
  var end = startEnd[1]
  var startDate = makeDate(start)
  var endDate = makeDate(end)

  function makeDate(date){
    let arr = date.split('/')
    let day = parseInt(arr[0]) + 1
    console.log("DAY", day)
    let month = arr[1]
    let year = arr[2]
    let datestring = year + "-" + month + "-" + day
    return new Date(datestring)
  }
  console.log(startDate, endDate)
}


}
