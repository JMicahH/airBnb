import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-trips',
  templateUrl: './your-trips.component.html',
  styleUrls: ['./your-trips.component.css']
})
export class YourTripsComponent implements OnInit {
  reservations: any;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
  ) { } 

  ngOnInit() {
  }

  getYourReservation(){
    this._apiService.getYourReservations()
    .then(data => {
      if (data.listings){
        this.reservations = data.reservations;
      }
      else{
        console.log("Error in getting reservations");
      }
    })
  }
}
